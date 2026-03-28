import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-sand bg-cream">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted">© {new Date().getFullYear()} Pri Chaves. Todos los derechos reservados.</p>
        <div className="flex gap-6 text-sm text-muted">
          <Link href="/masterclass" className="hover:text-charcoal transition-colors">Masterclass</Link>
          <Link href="/expansion-alineada" className="hover:text-charcoal transition-colors">Expansión Alineada</Link>
          <Link href="#contacto" className="hover:text-charcoal transition-colors">Contacto</Link>
        </div>
      </div>
    </footer>
  )
}
