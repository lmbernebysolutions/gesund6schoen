#!/bin/bash

# Script zum automatischen Download der Google Fonts - KORREKTE URLs
# DSGVO-konform: Fonts werden lokal gehostet

FONTS_DIR="public/fonts"

# Erstelle fonts Verzeichnis
mkdir -p "$FONTS_DIR"

echo "🚀 Starting font download (correct URLs from Google Fonts)..."
echo ""

# Quicksand - v37 (aktuelle Version) - KORREKTE URLs
echo "📦 Downloading Quicksand v37..."
curl -L "https://fonts.gstatic.com/s/quicksand/v37/6xKtdSZaM9iE8KbpRA_hK1QN.woff2" -o "$FONTS_DIR/quicksand-v37-latin-400.woff2" 2>/dev/null && echo "  ✅ quicksand-400" || echo "  ❌ quicksand-400 failed"
curl -L "https://fonts.gstatic.com/s/quicksand/v37/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2" -o "$FONTS_DIR/quicksand-v37-latin-600.woff2" 2>/dev/null && echo "  ✅ quicksand-600" || echo "  ❌ quicksand-600 failed"
curl -L "https://fonts.gstatic.com/s/quicksand/v37/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2" -o "$FONTS_DIR/quicksand-v37-latin-700.woff2" 2>/dev/null && echo "  ✅ quicksand-700" || echo "  ❌ quicksand-700 failed"

# Lato - v25 (aktuelle Version) - KORREKTE URLs
echo "📦 Downloading Lato v25..."
curl -L "https://fonts.gstatic.com/s/lato/v25/S6u9w4BMUTPHh7USSwaPGR_p.woff2" -o "$FONTS_DIR/lato-v25-latin-300.woff2" 2>/dev/null && echo "  ✅ lato-300" || echo "  ❌ lato-300 failed"
curl -L "https://fonts.gstatic.com/s/lato/v25/S6uyw4BMUTPHjx4wXg.woff2" -o "$FONTS_DIR/lato-v25-latin-400.woff2" 2>/dev/null && echo "  ✅ lato-400" || echo "  ❌ lato-400 failed"
curl -L "https://fonts.gstatic.com/s/lato/v25/S6u9w4BMUTPHh6UVSwaPGR_p.woff2" -o "$FONTS_DIR/lato-v25-latin-700.woff2" 2>/dev/null && echo "  ✅ lato-700" || echo "  ❌ lato-700 failed"

# Caveat - v23 (aktuelle Version) - KORREKTE URLs
echo "📦 Downloading Caveat v23..."
curl -L "https://fonts.gstatic.com/s/caveat/v23/Wnz6HAc5bAfYB2Q7azYYmg8.woff2" -o "$FONTS_DIR/caveat-v23-latin-400.woff2" 2>/dev/null && echo "  ✅ caveat-400" || echo "  ❌ caveat-400 failed"
curl -L "https://fonts.gstatic.com/s/caveat/v23/Wnz6HAc5bAfYB2Q7YjYYmg8.woff2" -o "$FONTS_DIR/caveat-v23-latin-700.woff2" 2>/dev/null && echo "  ✅ caveat-700" || echo "  ❌ caveat-700 failed"

echo ""
echo "✨ Font download complete!"
echo "📁 Fonts saved to: $FONTS_DIR"

