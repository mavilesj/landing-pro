import CTAButton from '@/components/CTAButton'
import Link from 'next/link'

const sessions = [
  { num: '01', title: 'Sesión de inicio', desc: 'Diagnóstico, definición de objetivos y diseño del proceso que vamos a recorrer juntas.' },
  { num: '02', title: 'Sesión de profundización', desc: 'Trabajo sobre las creencias, bloqueos o patrones que están limitando tu avance.' },
  { num: '03', title: 'Sesión de integración', desc: 'Cierre del proceso, consolidación de aprendizajes y plan de acción concreto para seguir avanzando.' },
]

export default function Programa3SesionesPage() {
  return (
    <>
      <section className="pt-32 pb-20 border-b border-sand">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Link href="/expansion-alineada" className="text-xs uppercase tracking-widest text-muted hover:text-gold transition-colors">
              ← Expansión Alineada
            </Link>
            <p className="text-sm uppercase tracking-widest text-gold">Programa · 3 sesiones</p>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight text-charcoal">
              Programa <span className="italic">3 Sesiones</span>
            </h1>
            <p className="text-muted leading-relaxed max-w-md">
              Un proceso de tres sesiones para generar un avance real, consciente y sostenido en el área de tu vida que más lo necesita.
            </p>
            <div className="space-y-1">
              <p className="text-2xl font-serif text-charcoal">$XX USD</p>
              <p className="text-xs text-muted">3 sesiones de [duración] · Videollamada por Zoom</p>
            </div>
            <CTAButton href="#" label="Quiero este programa" />
          </div>
          <div className="hidden md:flex bg-sand aspect-square items-center justify-center">
            <span className="text-muted text-sm">[ Imagen ]</span>
          </div>
        </div>
      </section>

      {/* Sessions breakdown */}
      <section className="py-24 border-b border-sand">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-gold">El proceso</p>
            <h2 className="text-3xl font-serif text-charcoal">Las 3 sesiones</h2>
          </div>
          <div className="space-y-6">
            {sessions.map((s) => (
              <div key={s.num} className="border border-sand bg-white p-8 flex gap-6 items-start">
                <span className="text-3xl font-serif text-sand">{s.num}</span>
                <div className="space-y-2">
                  <h3 className="font-medium text-charcoal">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-24 border-b border-sand bg-sand/20">
        <div className="max-w-3xl mx-auto px-6 space-y-10 text-center">
          <p className="text-sm uppercase tracking-widest text-gold">Incluye</p>
          <h2 className="text-3xl font-serif text-charcoal">¿Qué recibes?</h2>
          <ul className="text-left space-y-4 max-w-xl mx-auto">
            {[
              '3 sesiones de coaching de [duración] cada una.',
              'Acompañamiento por WhatsApp entre sesiones.',
              'Material de apoyo o ejercicios personalizados.',
              '[Cualquier otro beneficio o entregable]',
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
          <h2 className="text-3xl font-serif text-charcoal">¿Lista para avanzar?</h2>
          <p className="text-muted">Inversión: <span className="text-charcoal font-medium">$XX USD</span></p>
          <CTAButton href="#" label="Quiero este programa" />
          <p className="text-xs text-muted">¿Tienes dudas? <Link href="#" className="underline underline-offset-4 hover:text-charcoal">Escríbeme</Link>.</p>
        </div>
      </section>
    </>
  )
}
