/**
 * Konfiguration für vanilla-cookieconsent
 */
export const cookieConsentConfig = {
  // Root-Element für das Modal
  root: '#cc-root',
  
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom left',
      equalWeightButtons: true,
      flipButtons: false
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false
    }
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^_ga/, // Regex für Google Analytics Cookies
          },
          {
            name: '_gid',
          }
        ]
      }
    },
    marketing: {
      autoClear: {
        cookies: [
          {
            name: /^IDE/, // Google Ads / DoubleClick
          }
        ]
      },
      services: {
        instagram: {
          label: 'Instagram'
        },
        googleMaps: {
          label: 'Google Maps'
        }
      }
    }
  },

  language: {
    default: 'de',
    translations: {
      de: {
        consentModal: {
          title: 'Wir verwenden Cookies',
          description: 'Wir nutzen Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Einige sind notwendig, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Nur notwendige',
          showPreferencesBtn: 'Einstellungen verwalten',
          footer: `
            <a href="#" data-cc="show-privacyModal">Datenschutz</a>
            <a href="#" data-cc="show-imprintModal">Impressum</a>
          `
        },
        preferencesModal: {
          title: 'Cookie-Einstellungen verwalten',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Nur notwendige',
          savePreferencesBtn: 'Einstellungen speichern',
          closeIconLabel: 'Schließen',
          sections: [
            {
              title: 'Cookie-Verwendung',
              description: 'Hier können Sie auswählen, welche Kategorien von Cookies Sie akzeptieren möchten.'
            },
            {
              title: 'Notwendige Cookies',
              description: 'Diese Cookies sind für das Funktionieren der Website unerlässlich und können nicht deaktiviert werden.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analyse & Statistik',
              description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem Informationen anonym gesammelt und gemeldet werden (z.B. Google Analytics).',
              linkedCategory: 'analytics'
            },
            {
              title: 'Marketing & Externe Medien',
              description: 'Diese Cookies werden verwendet, um Werbung relevanter zu machen und Inhalte von Drittanbietern wie Google Maps oder Instagram anzuzeigen.',
              linkedCategory: 'marketing'
            }
          ]
        }
      }
    }
  }
};
