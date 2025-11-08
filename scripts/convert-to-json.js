import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, '..', 'src', 'data');

// Get all .js files in the data directory (excluding util.js)
const files = fs.readdirSync(dataDir)
  .filter(file => file.endsWith('.js') && file !== 'util.js')
  .sort();

console.log(`Found ${files.length} JS files to convert\n`);

for (const file of files) {
  const jsPath = path.join(dataDir, file);
  const jsonPath = path.join(dataDir, file.replace('.js', '.json'));
  
  // Skip if JSON already exists
  if (fs.existsSync(jsonPath)) {
    console.log(`⏭️  Skipping ${file} - JSON already exists`);
    continue;
  }
  
  try {
    // Import the JS module
    const fileUrl = `file:///${jsPath.replace(/\\/g, '/')}`;
    const module = await import(fileUrl);
    const data = module.default;
    
    // Write to JSON file
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
    
    console.log(`✅ Converted ${file} -> ${file.replace('.js', '.json')}`);
  } catch (error) {
    console.error(`❌ Error converting ${file}:`, error.message);
  }
}

console.log('\n✨ Conversion complete!');
