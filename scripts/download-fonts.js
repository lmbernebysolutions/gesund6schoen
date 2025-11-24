import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Font-Konfiguration basierend auf google-webfonts-helper
const fonts = [
  {
    name: 'Quicksand',
    weights: [400, 600, 700],
    subsets: ['latin'],
    files: {
      400: 'quicksand-v30-latin-400.woff2',
      600: 'quicksand-v30-latin-600.woff2',
      700: 'quicksand-v30-latin-700.woff2',
    },
    urls: {
      400: 'https://fonts.gstatic.com/s/quicksand/v30/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2',
      600: 'https://fonts.gstatic.com/s/quicksand/v30/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2',
      700: 'https://fonts.gstatic.com/s/quicksand/v30/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2',
    }
  },
  {
    name: 'Lato',
    weights: [300, 400, 700],
    subsets: ['latin'],
    files: {
      300: 'lato-v23-latin-300.woff2',
      400: 'lato-v23-latin-400.woff2',
      700: 'lato-v23-latin-700.woff2',
    },
    urls: {
      300: 'https://fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh7USSwaPGR_p.woff2',
      400: 'https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjx4wXg.woff2',
      700: 'https://fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh6UVSwaPGR_p.woff2',
    }
  },
  {
    name: 'Caveat',
    weights: [400, 700],
    subsets: ['latin'],
    files: {
      400: 'caveat-v17-latin-400.woff2',
      700: 'caveat-v17-latin-700.woff2',
    },
    urls: {
      400: 'https://fonts.gstatic.com/s/caveat/v17/WnznHAc5bAfYB2QRah7pcpNvOx-pjfJ9eI.woff2',
      700: 'https://fonts.gstatic.com/s/caveat/v17/WnznHAc5bAfYB2QRah7pcpNvOx-pjfJ9eI.woff2',
    }
  }
];

const fontsDir = path.join(__dirname, '..', 'public', 'fonts');

// Erstelle fonts Verzeichnis falls nicht vorhanden
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
  console.log('✅ Created fonts directory:', fontsDir);
}

// Download-Funktion
function downloadFont(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        file.close();
        fs.unlinkSync(filepath);
        downloadFont(response.headers.location, filepath).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
  });
}

// Lade alle Fonts herunter
async function downloadAllFonts() {
  console.log('🚀 Starting font download...\n');
  
  for (const font of fonts) {
    console.log(`📦 Downloading ${font.name}...`);
    
    for (const weight of font.weights) {
      const filename = font.files[weight];
      const url = font.urls[weight];
      const filepath = path.join(fontsDir, filename);
      
      try {
        await downloadFont(url, filepath);
        console.log(`  ✅ ${filename}`);
      } catch (error) {
        console.error(`  ❌ Failed to download ${filename}:`, error.message);
      }
    }
  }
  
  console.log('\n✨ Font download complete!');
  console.log(`📁 Fonts saved to: ${fontsDir}`);
}

// Führe Download aus
downloadAllFonts().catch(console.error);

