#!/bin/bash

# Script zum automatischen Download der Google Fonts - KORREKTE VERSIONEN
# DSGVO-konform: Fonts werden lokal gehostet

FONTS_DIR="public/fonts"

# Erstelle fonts Verzeichnis
mkdir -p "$FONTS_DIR"

echo "🚀 Starting font download (correct versions)..."
echo ""

# Lade die CSS-Datei von Google Fonts und extrahiere die URLs
CSS_FILE="/tmp/google-fonts-css.txt"
curl -s "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&family=Lato:wght@300;400;700&family=Caveat:wght@400;700&display=swap" -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" > "$CSS_FILE"

# Quicksand - Konvertiere TTF URLs zu WOFF2
echo "📦 Downloading Quicksand..."
QUICKSAND_400_URL=$(grep -A 1 "Quicksand.*400" "$CSS_FILE" | grep "url(" | sed "s/.*url(\(.*\)).*/\1/" | sed 's/) format.*//' | sed 's|\.ttf|.woff2|')
QUICKSAND_600_URL=$(grep -A 1 "Quicksand.*600" "$CSS_FILE" | grep "url(" | sed "s/.*url(\(.*\)).*/\1/" | sed 's/) format.*//' | sed 's|\.ttf|.woff2|')
QUICKSAND_700_URL=$(grep -A 1 "Quicksand.*700" "$CSS_FILE" | grep "url(" | sed "s/.*url(\(.*\)).*/\1/" | sed 's/) format.*//' | sed 's|\.ttf|.woff2|')

# Lato
echo "📦 Downloading Lato..."
LATO_300_URL=$(grep -A 1 "Lato.*300" "$CSS_FILE" | grep "url(" | sed "s/.*url(\(.*\)).*/\1/" | sed 's/) format.*//' | sed 's|\.ttf|.woff2|')
LATO_400_URL=$(grep -A 1 "Lato.*400" "$CSS_FILE" | grep "url(" | sed "s/.*url(\(.*\)).*/\1/" | sed 's/) format.*//' | sed 's|\.ttf|.woff2|')
LATO_700_URL=$(grep -A 1 "Lato.*700" "$CSS_FILE" | grep "url(" | sed "s/.*url(\(.*\)).*/\1/" | sed 's/) format.*//' | sed 's|\.ttf|.woff2|')

# Caveat
echo "📦 Downloading Caveat..."
CAVEAT_400_URL=$(grep -A 1 "Caveat.*400" "$CSS_FILE" | grep "url(" | sed "s/.*url(\(.*\)).*/\1/" | sed 's/) format.*//' | sed 's|\.ttf|.woff2|')
CAVEAT_700_URL=$(grep -A 1 "Caveat.*700" "$CSS_FILE" | grep "url(" | sed "s/.*url(\(.*\)).*/\1/" | sed 's/) format.*//' | sed 's|\.ttf|.woff2|')

# Download Quicksand
curl -L "$QUICKSAND_400_URL" -o "$FONTS_DIR/quicksand-v37-latin-400.woff2" 2>/dev/null && echo "  ✅ quicksand-400" || echo "  ❌ quicksand-400 failed"
curl -L "$QUICKSAND_600_URL" -o "$FONTS_DIR/quicksand-v37-latin-600.woff2" 2>/dev/null && echo "  ✅ quicksand-600" || echo "  ❌ quicksand-600 failed"
curl -L "$QUICKSAND_700_URL" -o "$FONTS_DIR/quicksand-v37-latin-700.woff2" 2>/dev/null && echo "  ✅ quicksand-700" || echo "  ❌ quicksand-700 failed"

# Download Lato
curl -L "$LATO_300_URL" -o "$FONTS_DIR/lato-v25-latin-300.woff2" 2>/dev/null && echo "  ✅ lato-300" || echo "  ❌ lato-300 failed"
curl -L "$LATO_400_URL" -o "$FONTS_DIR/lato-v25-latin-400.woff2" 2>/dev/null && echo "  ✅ lato-400" || echo "  ❌ lato-400 failed"
curl -L "$LATO_700_URL" -o "$FONTS_DIR/lato-v25-latin-700.woff2" 2>/dev/null && echo "  ✅ lato-700" || echo "  ❌ lato-700 failed"

# Download Caveat
curl -L "$CAVEAT_400_URL" -o "$FONTS_DIR/caveat-v23-latin-400.woff2" 2>/dev/null && echo "  ✅ caveat-400" || echo "  ❌ caveat-400 failed"
curl -L "$CAVEAT_700_URL" -o "$FONTS_DIR/caveat-v23-latin-700.woff2" 2>/dev/null && echo "  ✅ caveat-700" || echo "  ❌ caveat-700 failed"

echo ""
echo "✨ Font download complete!"
echo "📁 Fonts saved to: $FONTS_DIR"

