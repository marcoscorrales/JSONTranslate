import type { Metadata } from 'next'
import { GeistSans, GeistMono } from 'geist/font'
import './globals.css'

export const metadata: Metadata = {
  title: 'JSON Translate',
  description: 'Translate JSON files and code with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={GeistMono.className}>{children}</body>
    </html>
  );
}
