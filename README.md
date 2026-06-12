# FckBoyTel - Landing Page Setup

## Übersicht
Complete Next.js landing page für FckBoyTel mit:
- ✓ Oswald Font (Google Fonts, frei nutzbar)
- ✓ Tailwind CSS
- ✓ TypeScript
- ✓ Responsive Design
- ✓ Newsletter-Integration
- ✓ Anthrazit/Grau/Schwarz Theme

---

## Installation

### 1. Neues Next.js Projekt erstellen (falls nicht vorhanden)

```bash
npx create-next-app@latest fckboytel \
  --typescript \
  --tailwind \
  --app \
  --no-eslint
```

### 2. Dateien kopieren

Kopiere folgende Dateien in dein Projekt:

```
app/
├── layout.tsx          (Kopieren in app/)
├── page.tsx            (Kopieren in app/)
├── globals.css         (Kopieren in app/)
└── components/
    └── NewsletterForm.tsx  (Kopieren in app/components/)

tailwind.config.ts      (Im Root-Verzeichnis)
```

### 3. Abhängigkeiten installieren

```bash
npm install
```

Die Oswald Font wird direkt von Google Fonts geladen - kein zusätzliches Package nötig.

---

## Struktur

```
fckboytel/
├── app/
│   ├── page.tsx                    # Landing Page
│   ├── layout.tsx                  # Root Layout
│   ├── globals.css                 # Global Styles
│   └── components/
│       └── NewsletterForm.tsx       # Newsletter Component
├── public/
│   └── (images hier später)
├── tailwind.config.ts              # Tailwind Config
├── tsconfig.json                   # TypeScript Config
└── package.json
```

---

## Anpassungen

### 1. Newsletter-Integration
In `app/components/NewsletterForm.tsx` bei Bedarf API-Endpoint anpassen:

```typescript
// Beispiel: Supabase
const response = await fetch('/api/newsletter', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email })
});
```

### 2. Shop-Links
In `app/page.tsx` die Button-Links anpassen:

```typescript
// Von:
<button className="...">Zum Shop</button>

// Zu:
<a href="/shop" className="...">Zum Shop</a>
```

### 3. Logo einbinden
Wenn du ein Image-Logo hast:

```typescript
import Image from 'next/image';

<Image 
  src="/logo.svg" 
  alt="FckBoyTel" 
  width={200} 
  height={100} 
/>
```

### 4. Farben anpassen
Alle Farben nutzen Tailwind Gray-Palette. Änderungen in `tailwind.config.ts`:

```typescript
colors: {
  gray: {
    // Deine Farben hier
  }
}
```

---

## Development

```bash
npm run dev
```

Server läuft auf `http://localhost:3000`

---

## Production Build

```bash
npm run build
npm start
```

---

## Oswald Font - Lizenz

Die Oswald Font ist unter **SIL Open Font License (OFL)** verfügbar:
- ✓ Kostenlos
- ✓ Kommerziell nutzbar
- ✓ Keine Lizenzgebühren
- ✓ Unbegrenzte Nutzung

Quelle: [Google Fonts](https://fonts.google.com/specimen/Oswald)

---

## Weitere Schritte

1. **Domain**: fckboytel.de via Vercel oder eigenem Server hosten
2. **SSL**: Automatisch bei Vercel
3. **Analytics**: Google Analytics / Plausible hinzufügen
4. **Newsletter-DB**: Supabase / Firebase / EmailJS einbinden
5. **Shop**: Shopify / WooCommerce Integration
6. **SEO**: Sitemap, robots.txt, structured data

---

## Deployment auf Vercel

```bash
npm i -g vercel
vercel
```

Folge den Prompts - Vercel erkennt automatisch dein Next.js Projekt.

---

## Support

Fragen zur Oswald Font? → [Google Fonts Dokumentation](https://fonts.google.com/)
Fragen zu Next.js? → [Next.js Docs](https://nextjs.org/docs)
Fragen zu Tailwind? → [Tailwind Docs](https://tailwindcss.com/docs)

---

**Version**: 1.0  
**Last Updated**: 2025  
**Status**: Production Ready