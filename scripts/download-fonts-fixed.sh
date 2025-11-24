#!/bin/bash

# Script zum automatischen Download der Google Fonts - KORREKTE URLs
# DSGVO-konform: Fonts werden lokal gehostet

FONTS_DIR="public/fonts"

# Erstelle fonts Verzeichnis
mkdir -p "$FONTS_DIR"

echo "🚀 Starting font download (correct URLs from Google Fonts)..."
echo ""

# Quicksand - v37 (aktuelle Version)
echo "📦 Downloading Quicksand v37..."
curl -L "https://fonts.gstatic.com/s/quicksand/v37/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o18E.woff2" -o "$FONTS_DIR/quicksand-v37-latin-400.woff2" 2>/dev/null && echo "  ✅ quicksand-400" || echo "  ❌ quicksand-400 failed"
curl -L "https://fonts.gstatic.com/s/quicksand/v37/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkCEv18E.woff2" -o "$FONTS_DIR/quicksand-v37-latin-600.woff2" 2>/dev/null && echo "  ✅ quicksand-600" || echo "  ❌ quicksand-600 failed"
curl -L "https://fonts.gstatic.com/s/quicksand/v37/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkBgv18E.woff2" -o "$FONTS_DIR/quicksand-v37-latin-700.woff2" 2>/dev/null && echo "  ✅ quicksand-700" || echo "  ❌ quicksand-700 failed"

# Lato - v25 (aktuelle Version)
echo "📦 Downloading Lato v25..."
curl -L "https://fonts.gstatic.com/s/lato/v25/S6u9w4BMUTPHh7USew8.woff2" -o "$FONTS_DIR/lato-v25-latin-300.woff2" 2>/dev/null && echo "  ✅ lato-300" || echo "  ❌ lato-300 failed"
curl -L "https://fonts.gstatic.com/s/lato/v25/S6uyw4BMUTPHvxk.woff2" -o "$FONTS_DIR/lato-v25-latin-400.woff2" 2>/dev/null && echo "  ✅ lato-400" || echo "  ❌ lato-400 failed"
curl -L "https://fonts.gstatic.com/s/lato/v25/S6u9w4BMUTPHh6UVew8.woff2" -o "$FONTS_DIR/lato-v25-latin-700.woff2" 2>/dev/null && echo "  ✅ lato-700" || echo "  ❌ lato-700 failed"

# Caveat - v23 (aktuelle Version)
echo "📦 Downloading Caveat v23..."
curl -L "https://fonts.gstatic.com/s/caveat/v23/WnznHAc5bAfYB2QRah7pcpNvOx-pjfJ9SII.woff2" -o "$FONTS_DIR/caveat-v23-latin-400.woff2" 2>/dev/null && echo "  ✅ caveat-400" || echo "  ❌ caveat-400 failed"
curl -L "https://fonts.gstatic.com/s/caveat/v23/WnznHAc5bAfYB2QRah7pcpNvOx-pjRV6SII.woff2" -o "$FONTS_DIR/caveat-v23-latin-700.woff2" 2>/dev/null && echo "  ✅ caveat-700" || echo "  ❌ caveat-700 failed"

echo ""
echo "✨ Font download complete!"
echo "📁 Fonts saved to: $FONTS_DIR"

