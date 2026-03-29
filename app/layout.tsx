import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pri Chaves | Coaching & Mentoría',
  description: 'Acompañamiento consciente para tu expansión personal y profesional.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-cream text-charcoal antialiased`}>
        {children}
      </body>
    </html>
  )
}
