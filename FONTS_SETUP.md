# Google Fonts - Lokales Hosting (DSGVO-konform)

## Problem
Die aktuell verwendeten Google Fonts werden von Google-Servern geladen, was eine Übertragung der IP-Adresse in die USA bedeutet. Dies ist **DSGVO-kritisch** und kann zu Abmahnungen führen.

## Lösung: Fonts lokal hosten

### Schritt 1: Fonts herunterladen

1. Besuchen Sie: https://google-webfonts-helper.herokuapp.com/
2. Suchen Sie nach den folgenden Fonts und laden Sie sie herunter:
   - **Quicksand** (weights: 400, 600, 700)
   - **Lato** (weights: 300, 400, 700)
   - **Caveat** (weights: 400, 700)

### Schritt 2: Fonts in Projekt einbinden

1. Erstellen Sie einen Ordner: `public/fonts/`
2. Kopieren Sie die heruntergeladenen Font-Dateien (.woff2) in diesen Ordner
3. Die Struktur sollte so aussehen:
   ```
   public/
     fonts/
       quicksand-v30-latin-400.woff2
       quicksand-v30-latin-600.woff2
       quicksand-v30-latin-700.woff2
       lato-v23-latin-300.woff2
       lato-v23-latin-400.woff2
       lato-v23-latin-700.woff2
       caveat-v17-latin-400.woff2
       caveat-v17-latin-700.woff2
   ```

### Schritt 3: CSS aktualisieren

Die `src/styles/global.css` wurde bereits angepasst, um lokale Fonts zu verwenden. 
Falls die Fonts noch nicht vorhanden sind, wird automatisch auf Google Fonts zurückgegriffen (Fallback).

### Alternative: Automatisches Download-Script

Sie können auch ein Script verwenden, um die Fonts automatisch herunterzuladen:

```bash
# Installiere google-webfonts-helper CLI (falls verfügbar)
# Oder verwenden Sie die Web-Interface: https://google-webfonts-helper.herokuapp.com/
```

## Wichtig

Nach dem Einbinden der lokalen Fonts:
1. Testen Sie die Website, um sicherzustellen, dass alle Fonts korrekt geladen werden
2. Entfernen Sie den Google Fonts Import aus `src/styles/global.css` (Zeile 1)
3. Die Website ist dann vollständig DSGVO-konform

