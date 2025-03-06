#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { newsData } from './src/data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory for API output
const API_BASE_DIR = path.join(__dirname, 'docs', 'api');
const LANGUAGE = 'zh'; // Default language
const API_LANG_DIR = path.join(API_BASE_DIR, LANGUAGE);

// Ensure directories exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Group news data by date
function groupNewsByDate(data) {
  const grouped = {};
  
  data.forEach(item => {
    const { year, month, day, date } = item;
    
    if (!grouped[year]) {
      grouped[year] = {};
    }
    
    if (!grouped[year][month]) {
      grouped[year][month] = {};
    }
    
    if (!grouped[year][month][day]) {
      grouped[year][month][day] = [];
    }
    
    grouped[year][month][day].push(item);
  });
  
  return grouped;
}

// Extract project names and insight slogans from data
function extractSummaryData(dayData) {
  const result = {
    date: ''
  };
  
  if (dayData && dayData.length > 0) {
    // Set the date from the first item
    result.date = dayData[0].date;
    
    const projects = [];
    const insights = [];
    
    // Extract project names and insight slogans
    dayData.forEach(item => {
      if (item.projects && Array.isArray(item.projects)) {
        item.projects.forEach(project => {
          if (project.name) {
            projects.push(project.name);
          }
        });
      }
      
      if (item.insights && Array.isArray(item.insights)) {
        item.insights.forEach(insight => {
          if (insight.slogan) {
            insights.push(insight.slogan);
          }
        });
      }
    });
    
    // Only add projects and insights if they have elements
    if (projects.length > 0) {
      result.projects = projects;
    }
    
    if (insights.length > 0) {
      result.insights = insights;
    }
  }
  
  return result;
}

// Generate index files with simpler structure
function generateIndexFiles(groupedData) {
  // Create main index - year as key, months array as value
  const mainIndex = {};
  const years = Object.keys(groupedData).sort();
  
  years.forEach(year => {
    mainIndex[year] = Object.keys(groupedData[year]).sort();
  });
  
  // Write main index file
  ensureDirectoryExists(API_LANG_DIR);
  fs.writeFileSync(
    path.join(API_LANG_DIR, 'index.json'),
    JSON.stringify(mainIndex, null, 2)
  );
  
  // Create year indexes - month as key, days array as value
  years.forEach(year => {
    const yearDir = path.join(API_LANG_DIR, year);
    ensureDirectoryExists(yearDir);
    
    const yearIndex = {};
    const months = Object.keys(groupedData[year]).sort();
    
    months.forEach(month => {
      yearIndex[month] = Object.keys(groupedData[year][month]).sort();
    });
    
    // Write year index file
    fs.writeFileSync(
      path.join(yearDir, 'index.json'),
      JSON.stringify(yearIndex, null, 2)
    );
    
    // Create month indexes - day as key, complex object as value
    months.forEach(month => {
      const monthDir = path.join(yearDir, month);
      ensureDirectoryExists(monthDir);
      
      const monthIndex = {};
      const days = Object.keys(groupedData[year][month]).sort();
      
      days.forEach(day => {
        const dayData = groupedData[year][month][day];
        monthIndex[day] = extractSummaryData(dayData);
      });
      
      // Write month index file
      fs.writeFileSync(
        path.join(monthDir, 'index.json'),
        JSON.stringify(monthIndex, null, 2)
      );
      
      // Create day content files
      days.forEach(day => {
        const dayContent = groupedData[year][month][day];
        fs.writeFileSync(
          path.join(monthDir, `${day}.json`),
          JSON.stringify(dayContent, null, 2)
        );
      });
    });
  });
}

// Main function to generate API files
async function generateAPI() {
  try {
    console.log('Generating API files...');
    
    // Ensure base directories exist
    ensureDirectoryExists(API_BASE_DIR);
    ensureDirectoryExists(API_LANG_DIR);
    
    // Group news data by date
    const groupedData = groupNewsByDate(newsData);
    
    // Generate index and content files
    generateIndexFiles(groupedData);
    
    console.log('API files generated successfully!');
  } catch (error) {
    console.error('Failed to generate API files:', error);
    process.exit(1);
  }
}

// Execute if called directly
if (import.meta.url === `file://${__filename}`) {
  generateAPI();
}

export { generateAPI };
