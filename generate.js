// Import necessary modules
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { newsData } from './src/data.js';

// Global constants
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_BASE_DIR = path.join(__dirname, 'docs', 'api');
const LANGUAGES = ['zh', 'en'];

// Helper functions
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeJsonFile(filepath, data) {
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
}

// Group news data by year, month, day
function groupNewsByDate(newsItems) {
  const grouped = {};
  
  newsItems.forEach(item => {
    const [year, month, day] = item.date.split('-');
    
    grouped[year] = grouped[year] || {};
    grouped[year][month] = grouped[year][month] || {};
    grouped[year][month][day] = item;
  });
  
  return grouped;
}

// Extract summary data for month index
function extractSummaryData(item, language) {
  return {
    date: item.date,
    projects: item.projects.map(project => 
      typeof project === 'string' ? project : project.name
    )
  };
}

// Process project data for language-specific content
function processProjectData(project, language) {
  if (typeof project === 'string') {
    return project;
  }
  
  const { name, url, type, tags, summary } = project;
  
  const processedTags = tags ? tags.map(tag => {
    if (typeof tag === 'string') {
      return tag;
    } else if (tag[language]) {
      return tag[language];
    } else if (tag.zh) {
      return tag.zh; // Fallback to Chinese
    }
    return tag;
  }) : [];
  
  const processedSummary = summary ? 
    (typeof summary === 'string' ? summary : (summary[language] || summary.zh)) : 
    '';
  
  return {
    name,
    url,
    type,
    tags: processedTags,
    summary: processedSummary
  };
}

// Process language-specific data
function processLanguageData(item, language) {
  const processedProjects = item.projects ? 
    item.projects.map(project => processProjectData(project, language)) : 
    [];
  
  const processedInsights = item.insights ? 
    item.insights.map(insight => {
      if (typeof insight === 'string') {
        return insight;
      }
      return insight[language] || insight.zh || insight;
    }) : 
    [];
  
  return {
    date: item.date,
    projects: processedProjects,
    insights: processedInsights
  };
}

// Generate index files with original structure
function generateIndexFiles(groupedData, language) {
  // For backward compatibility, only require explicit language support for non-zh languages
  if (language !== 'zh') {
    // Check if ANY data entries support this language
    let hasLanguageSupport = false;
    
    // Debug for troubleshooting
    console.log(`Checking support for language: ${language}`);
    
    for (const year in groupedData) {
      for (const month in groupedData[year]) {
        for (const day in groupedData[year][month]) {
          const entry = groupedData[year][month][day];
          if (entry.languages && entry.languages.includes(language)) {
            hasLanguageSupport = true;
            console.log(`Found entry with ${language} support: ${entry.date}`);
          }
        }
      }
    }
    
    if (!hasLanguageSupport) {
      console.log(`Skipping API generation for language: ${language} as no entries support it`);
      return;
    }
  }

  const API_LANG_DIR = path.join(API_BASE_DIR, language);
  
  // Create main index - year as key, months array as value
  const mainIndex = {};
  const years = Object.keys(groupedData).sort();
  
  // For each year
  for (const year of years) {
    const yearMonths = [];
    const months = Object.keys(groupedData[year]).sort();
    
    // For each month, check if it has days that support this language
    for (const month of months) {
      const days = Object.keys(groupedData[year][month]);
      const supportedDays = days.filter(day => {
        const entry = groupedData[year][month][day];
        return language === 'zh' || (entry.languages && entry.languages.includes(language));
      });
      
      if (supportedDays.length > 0) {
        yearMonths.push(month);
      }
    }
    
    if (yearMonths.length > 0) {
      mainIndex[year] = yearMonths;
    }
  }
  
  // Write main index file
  ensureDirectoryExists(API_LANG_DIR);
  writeJsonFile(path.join(API_LANG_DIR, 'index.json'), mainIndex);
  
  // Create year indexes - month as key, days array as value
  for (const year of Object.keys(mainIndex)) {
    const yearDir = path.join(API_LANG_DIR, year);
    ensureDirectoryExists(yearDir);
    
    const yearIndex = {};
    const months = mainIndex[year];
    
    for (const month of months) {
      const days = Object.keys(groupedData[year][month]);
      const supportedDays = days.filter(day => {
        const entry = groupedData[year][month][day];
        return language === 'zh' || (entry.languages && entry.languages.includes(language));
      });
      
      if (supportedDays.length > 0) {
        yearIndex[month] = supportedDays.sort();
      }
    }
    
    // Write year index file
    writeJsonFile(path.join(yearDir, 'index.json'), yearIndex);
    
    // Create month indexes - day as key, summary as value
    for (const month of Object.keys(yearIndex)) {
      const monthDir = path.join(yearDir, month);
      ensureDirectoryExists(monthDir);
      
      const monthIndex = {};
      const supportedDays = yearIndex[month];
      
      for (const day of supportedDays) {
        const dayData = groupedData[year][month][day];
        monthIndex[day] = extractSummaryData(dayData, language);
      }
      
      // Write month index file
      writeJsonFile(path.join(monthDir, 'index.json'), monthIndex);
      
      // Create day content files with language-specific content
      for (const day of supportedDays) {
        const dayData = groupedData[year][month][day];
        const processedDayData = processLanguageData(dayData, language);
        
        writeJsonFile(path.join(monthDir, `${day}.json`), processedDayData);
      }
    }
  }
}

// Main function to generate API files
async function generateAPI() {
  try {
    console.log('Generating API files...');
    
    // Ensure API directory exists
    ensureDirectoryExists(API_BASE_DIR);
    
    // Group news data by date
    const groupedData = groupNewsByDate(newsData);
    
    // Debug - log today's data to see if languages field is present
    const today = new Date();
    const year = String(today.getFullYear());
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    const todayData = newsData.find(entry => entry.date === `${year}-${month}-${day}`);
    console.log('Today data:', todayData ? JSON.stringify(todayData, null, 2) : 'No data for today');
    
    // Generate index and content files for each language
    for (const language of LANGUAGES) {
      console.log(`Generating API files for language: ${language}`);
      generateIndexFiles(groupedData, language);
    }
    
    console.log('API files generated successfully!');
  } catch (error) {
    console.error('Error generating API files:', error);
    process.exit(1);
  }
}

// Execute the main function
generateAPI();
