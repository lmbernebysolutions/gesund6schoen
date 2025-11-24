#!/bin/bash

# Script zum automatischen Download der Google Fonts
# DSGVO-konform: Fonts werden lokal gehostet

FONTS_DIR="public/fonts"

# Erstelle fonts Verzeichnis
mkdir -p "$FONTS_DIR"

echo "🚀 Starting font download..."
echo ""

# Quicksand Fonts
echo "📦 Downloading Quicksand..."
curl -L "https://fonts.gstatic.com/s/quicksand/v30/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2" -o "$FONTS_DIR/quicksand-v30-latin-400.woff2"
curl -L "https://fonts.gstatic.com/s/quicksand/v30/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2" -o "$FONTS_DIR/quicksand-v30-latin-600.woff2"
curl -L "https://fonts.gstatic.com/s/quicksand/v30/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2" -o "$FONTS_DIR/quicksand-v30-latin-700.woff2"

# Lato Fonts
echo "📦 Downloading Lato..."
curl -L "https://fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh7USSwaPGR_p.woff2" -o "$FONTS_DIR/lato-v23-latin-300.woff2"
curl -L "https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjx4wXg.woff2" -o "$FONTS_DIR/lato-v23-latin-400.woff2"
curl -L "https://fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh6UVSwaPGR_p.woff2" -o "$FONTS_DIR/lato-v23-latin-700.woff2"

# Caveat Fonts
echo "📦 Downloading Caveat..."
curl -L "https://fonts.gstatic.com/s/caveat/v17/WnznHAc5bAfYB2QRah7pcpNvOx-pjfJ9eI.woff2" -o "$FONTS_DIR/caveat-v17-latin-400.woff2"
curl -L "https://fonts.gstatic.com/s/caveat/v17/WnznHAc5bAfYB2QRah7pcpNvOx-pjfJ9eI.woff2" -o "$FONTS_DIR/caveat-v17-latin-700.woff2"

echo ""
echo "✨ Font download complete!"
echo "📁 Fonts saved to: $FONTS_DIR"

