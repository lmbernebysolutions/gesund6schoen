import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const originalCssPath = path.join(__dirname, '..', 'src', 'styles', 'google-fonts-original.css');
const fontsDir = path.join(__dirname, '..', 'public', 'fonts');
const outputCssPath = path.join(__dirname, '..', 'src', 'styles', 'fonts.css');

if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

const cssContent = fs.readFileSync(originalCssPath, 'utf8');
let newCssContent = cssContent;

const urlRegex = /url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g;
let match;
const downloads = [];

while ((match = urlRegex.exec(cssContent)) !== null) {
  const url = match[1];
  const filename = path.basename(url);
  const localPath = path.join(fontsDir, filename);
  const publicPath = `/fonts/${filename}`; // Absolute path for web server

  // Replace URL in CSS content
  newCssContent = newCssContent.replace(url, publicPath);

  downloads.push({ url, localPath });
}

// Write new CSS
fs.writeFileSync(outputCssPath, newCssContent);
console.log(`Created ${outputCssPath}`);

// Download fonts
downloads.forEach(({ url, localPath }) => {
  const file = fs.createWriteStream(localPath);
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${path.basename(localPath)}`);
    });
  }).on('error', (err) => {
    fs.unlink(localPath, () => {}); // Delete incomplete file
    console.error(`Error downloading ${url}: ${err.message}`);
  });
});

