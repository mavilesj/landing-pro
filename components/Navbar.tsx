'use client'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Masterclass', href: '/masterclass' },
  { label: 'Expansión Alineada', href: '/expansion-alineada' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-sand">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-wide text-charcoal">
          Pri Chaves
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm text-muted hover:text-charcoal transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contacto"
              className="text-sm px-5 py-2 border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-colors"
            >
              Trabajemos juntas
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-sand px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted hover:text-charcoal">
              {l.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setOpen(false)}
            className="text-sm px-5 py-2 border border-charcoal text-charcoal text-center hover:bg-charcoal hover:text-cream transition-colors"
          >
            Trabajemos juntas
          </Link>
        </div>
      )}
    </nav>
  )
}
