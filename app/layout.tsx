import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FckBoyTel - Der Kulturbeutel für Männer mit Plan',
  description: 'Zahnbürste, Deo, Labello, Feuerzeug. Alles dabei. Null Improvisation.',
  keywords: ['Kulturbeutel', 'Overnight Bag', 'Geschenk', 'Humor', 'FckBoyTel'],
  authors: [{ name: 'FckBoyTel' }],
  openGraph: {
    title: 'FckBoyTel - Der Kulturbeutel für Männer mit Plan',
    description: 'Zahnbürste, Deo, Labello, Feuerzeug. Alles dabei. Null Improvisation.',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Oswald', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}