#!/bin/bash

# Script zum automatischen Download der Google Fonts - FINALE KORREKTE VERSION
# DSGVO-konform: Fonts werden lokal gehostet

FONTS_DIR="public/fonts"

# Erstelle fonts Verzeichnis
mkdir -p "$FONTS_DIR"

echo "🚀 Starting font download (final correct URLs)..."
echo ""

# Hole die CSS-Datei und extrahiere die WOFF2-URLs
CSS_CONTENT=$(curl -s "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&family=Lato:wght@300;400;700&family=Caveat:wght@400;700&display=swap" -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")

# Quicksand
echo "📦 Downloading Quicksand..."
QUICKSAND_400=$(echo "$CSS_CONTENT" | grep -A 2 "Quicksand.*400" | grep "woff2" | head -1 | grep -o "https://[^)]*woff2")
QUICKSAND_600=$(echo "$CSS_CONTENT" | grep -A 2 "Quicksand.*600" | grep "woff2" | head -1 | grep -o "https://[^)]*woff2")
QUICKSAND_700=$(echo "$CSS_CONTENT" | grep -A 2 "Quicksand.*700" | grep "woff2" | head -1 | grep -o "https://[^)]*woff2")

curl -L "$QUICKSAND_400" -o "$FONTS_DIR/quicksand-v37-latin-400.woff2" 2>/dev/null && echo "  ✅ quicksand-400" || echo "  ❌ quicksand-400 failed"
curl -L "$QUICKSAND_600" -o "$FONTS_DIR/quicksand-v37-latin-600.woff2" 2>/dev/null && echo "  ✅ quicksand-600" || echo "  ❌ quicksand-600 failed"
curl -L "$QUICKSAND_700" -o "$FONTS_DIR/quicksand-v37-latin-700.woff2" 2>/dev/null && echo "  ✅ quicksand-700" || echo "  ❌ quicksand-700 failed"

# Lato
echo "📦 Downloading Lato..."
LATO_300=$(echo "$CSS_CONTENT" | grep -A 2 "Lato.*300" | grep "woff2" | head -1 | grep -o "https://[^)]*woff2")
LATO_400=$(echo "$CSS_CONTENT" | grep -A 2 "Lato.*400" | grep "woff2" | head -1 | grep -o "https://[^)]*woff2")
LATO_700=$(echo "$CSS_CONTENT" | grep -A 2 "Lato.*700" | grep "woff2" | head -1 | grep -o "https://[^)]*woff2")

curl -L "$LATO_300" -o "$FONTS_DIR/lato-v25-latin-300.woff2" 2>/dev/null && echo "  ✅ lato-300" || echo "  ❌ lato-300 failed"
curl -L "$LATO_400" -o "$FONTS_DIR/lato-v25-latin-400.woff2" 2>/dev/null && echo "  ✅ lato-400" || echo "  ❌ lato-400 failed"
curl -L "$LATO_700" -o "$FONTS_DIR/lato-v25-latin-700.woff2" 2>/dev/null && echo "  ✅ lato-700" || echo "  ❌ lato-700 failed"

# Caveat
echo "📦 Downloading Caveat..."
CAVEAT_400=$(echo "$CSS_CONTENT" | grep -A 2 "Caveat.*400" | grep "woff2" | head -1 | grep -o "https://[^)]*woff2")
CAVEAT_700=$(echo "$CSS_CONTENT" | grep -A 2 "Caveat.*700" | grep "woff2" | head -1 | grep -o "https://[^)]*woff2")

curl -L "$CAVEAT_400" -o "$FONTS_DIR/caveat-v23-latin-400.woff2" 2>/dev/null && echo "  ✅ caveat-400" || echo "  ❌ caveat-400 failed"
curl -L "$CAVEAT_700" -o "$FONTS_DIR/caveat-v23-latin-700.woff2" 2>/dev/null && echo "  ✅ caveat-700" || echo "  ❌ caveat-700 failed"

echo ""
echo "✨ Font download complete!"
echo "📁 Fonts saved to: $FONTS_DIR"

