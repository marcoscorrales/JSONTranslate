import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TranslationProvider } from '@/Context/store'

const inter = Inter({ subsets: ['latin'] })

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
      <TranslationProvider>
        <body className={inter.className}>{children}</body>
      </TranslationProvider>
    </html>
  );
}
