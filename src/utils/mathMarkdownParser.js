/**
 * Enhanced Markdown parser with KaTeX math support
 */
import { marked } from 'marked';
import katex from 'katex';

// Configure marked options
marked.setOptions({
  gfm: true,         // GitHub flavored markdown
  breaks: true,      // Convert line breaks to <br>
  sanitize: false,   // Allow HTML
  smartLists: true,  // Use smarter list behavior
});

// Custom renderer for math expressions
const renderer = new marked.Renderer();

// Identify and render math expressions
// Match $$ ... $$ for block-level math and $ ... $ for inline math
const katexRenderer = (text) => {
  const blockMathRegex = /\$\$([\s\S]*?)\$\$/g;
  const inlineMathRegex = /\$([^\$]*?)\$/g;

  // Process block-level math expressions
  text = text.replace(blockMathRegex, (match, math) => {
    try {
      return `<div class="math-block">${katex.renderToString(math, { displayMode: true })}</div>`;
    } catch (error) {
      console.error('KaTeX error:', error);
      return `<div class="math-block error">${match}</div>`;
    }
  });

  // Process inline math expressions
  text = text.replace(inlineMathRegex, (match, math) => {
    try {
      return katex.renderToString(math, { displayMode: false });
    } catch (error) {
      console.error('KaTeX error:', error);
      return `<span class="math-inline error">${match}</span>`;
    }
  });

  return text;
};

/**
 * Parse markdown text with math expressions to HTML
 * @param {string} text - Markdown text to parse
 * @returns {string} - HTML string
 */
export const parseMathMarkdown = (text) => {
  if (!text) return '';
  
  // First, render math expressions
  const processedText = katexRenderer(text);
  
  // Then, render markdown
  return marked.parse(processedText);
};
