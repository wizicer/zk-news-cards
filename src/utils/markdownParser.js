/**
 * Markdown parser using the marked library
 */
import { marked } from 'marked';

// Configure marked options
marked.setOptions({
  gfm: true,         // GitHub flavored markdown
  breaks: true,      // Convert line breaks to <br>
  sanitize: false,   // Allow HTML
  smartLists: true,  // Use smarter list behavior
});

/**
 * Parse markdown text to HTML
 * @param {string} text - Markdown text to parse
 * @returns {string} - HTML string
 */
export const parseMarkdown = (text) => {
  if (!text) return '';
  return marked.parse(text);
};
