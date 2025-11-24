# Google Fonts - Lokales Hosting (DSGVO-konform)

## Problem
Die aktuell verwendeten Google Fonts werden von Google-Servern geladen, was eine Übertragung der IP-Adresse in die USA bedeutet. Dies ist **DSGVO-kritisch** und kann zu Abmahnungen führen.

## Lösung: Fonts lokal hosten

### Schritt 1: Fonts automatisch herunterladen

**Einfachste Methode:** Nutzen Sie das bereitgestellte Script:

```bash
npm run download-fonts
```

Oder direkt:

```bash
./scripts/download-fonts.sh
```

Das Script lädt automatisch alle benötigten Fonts herunter:
   - **Quicksand** (weights: 400, 600, 700)
   - **Lato** (weights: 300, 400, 700)
   - **Caveat** (weights: 400, 700)

### Schritt 2: Fonts-Verzeichnis

Die Fonts werden automatisch in `public/fonts/` gespeichert:

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

### Schritt 3: CSS

Die `src/styles/global.css` wurde bereits angepasst und verwendet jetzt **nur noch lokale Fonts** (DSGVO-konform).
Der Google Fonts Import wurde entfernt.

### Alternative: Manueller Download

Falls das Script nicht funktioniert, können Sie die Fonts manuell herunterladen:

1. Besuchen Sie: https://google-webfonts-helper.herokuapp.com/
2. Laden Sie die Fonts herunter und kopieren Sie sie in `public/fonts/`

## Status

✅ **Fonts wurden bereits heruntergeladen und eingebunden!**

Die Website ist jetzt vollständig **DSGVO-konform**:
- ✅ Alle Fonts werden lokal gehostet
- ✅ Keine Verbindung zu Google-Servern
- ✅ Keine IP-Übertragung in die USA

## Wichtig

Falls Sie die Fonts erneut herunterladen müssen:
1. Führen Sie `npm run download-fonts` aus
2. Testen Sie die Website, um sicherzustellen, dass alle Fonts korrekt geladen werden

