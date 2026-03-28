import CTAButton from '@/components/CTAButton'
import Link from 'next/link'

export default function SesionIndividualPage() {
  return (
    <>
      <section className="pt-32 pb-20 border-b border-sand">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Link href="/expansion-alineada" className="text-xs uppercase tracking-widest text-muted hover:text-gold transition-colors">
              ← Expansión Alineada
            </Link>
            <p className="text-sm uppercase tracking-widest text-gold">Sesión única</p>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight text-charcoal">
              Sesión <span className="italic">Individual</span>
            </h1>
            <p className="text-muted leading-relaxed max-w-md">
              Una sesión de coaching de [duración] para trabajar con enfoque y profundidad un tema o situación específica de tu vida o negocio.
            </p>
            <div className="space-y-1">
              <p className="text-2xl font-serif text-charcoal">$XX USD</p>
              <p className="text-xs text-muted">[Duración] · Videollamada por Zoom</p>
            </div>
            <CTAButton href="#" label="Reservar mi sesión" />
          </div>
          <div className="hidden md:flex bg-sand aspect-square items-center justify-center">
            <span className="text-muted text-sm">[ Imagen ]</span>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 border-b border-sand">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-gold">Incluye</p>
            <h2 className="text-3xl font-serif text-charcoal">¿Qué recibes?</h2>
          </div>
          <ul className="space-y-5 max-w-xl mx-auto">
            {[
              'Sesión de coaching de [duración] por videollamada.',
              'Espacio de escucha activa y acompañamiento profundo.',
              'Claridad sobre el tema o situación trabajada.',
              'Pasos concretos para avanzar después de la sesión.',
              '[Cualquier otro beneficio o entregable que incluyas]',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                <span className="text-gold mt-0.5">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ideal for */}
      <section className="py-24 border-b border-sand bg-sand/20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <p className="text-sm uppercase tracking-widest text-gold">Ideal para ti si…</p>
          <ul className="text-left space-y-4 max-w-xl mx-auto">
            {[
              'Tienes una situación puntual que quieres trabajar con claridad.',
              'Quieres vivir la experiencia antes de comprometerte con un programa.',
              '[Otro perfil de cliente ideal para esta opción]',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                <span className="text-gold mt-0.5">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl font-serif text-charcoal">¿Lista para tu sesión?</h2>
          <p className="text-muted">Una inversión de <span className="text-charcoal font-medium">$XX USD</span> en ti misma.</p>
          <CTAButton href="#" label="Reservar mi sesión" />
          <p className="text-xs text-muted">¿Tienes dudas? <Link href="#" className="underline underline-offset-4 hover:text-charcoal">Escríbeme</Link>.</p>
        </div>
      </section>
    </>
  )
}
