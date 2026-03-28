import CTAButton from '@/components/CTAButton'
import Link from 'next/link'

export default function BonusContinuidadPage() {
  return (
    <>
      <section className="pt-32 pb-20 border-b border-sand">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Link href="/expansion-alineada" className="text-xs uppercase tracking-widest text-muted hover:text-gold transition-colors">
              ← Expansión Alineada
            </Link>
            <p className="text-sm uppercase tracking-widest text-gold">Seguimiento</p>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight text-charcoal">
              Bonus de <span className="italic">Continuidad</span>
            </h1>
            <p className="text-muted leading-relaxed max-w-md">
              Un espacio de seguimiento diseñado para quienes ya han trabajado conmigo y quieren mantener el impulso de su proceso, consolidar cambios y seguir expandiéndose.
            </p>
            <div className="space-y-1">
              <p className="text-2xl font-serif text-charcoal">$XX USD</p>
              <p className="text-xs text-muted">[Descripción del formato — sesiones/mensual/etc.]</p>
            </div>
            <CTAButton href="#" label="Quiero el Bonus" />
          </div>
          <div className="hidden md:flex bg-sand aspect-square items-center justify-center">
            <span className="text-muted text-sm">[ Imagen ]</span>
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-24 border-b border-sand">
        <div className="max-w-3xl mx-auto px-6 space-y-10 text-center">
          <p className="text-sm uppercase tracking-widest text-gold">¿Para quién es?</p>
          <h2 className="text-3xl font-serif text-charcoal">Este bonus es para ti si…</h2>
          <ul className="text-left space-y-4 max-w-xl mx-auto">
            {[
              'Ya has completado un proceso de coaching conmigo.',
              'Quieres mantener el acompañamiento para no perder el impulso.',
              'Estás en un momento de transición o nuevo desafío y necesitas apoyo.',
              'Deseas un espacio de seguimiento a un precio especial.',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                <span className="text-gold mt-0.5">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Includes */}
      <section className="py-24 border-b border-sand bg-sand/20">
        <div className="max-w-3xl mx-auto px-6 space-y-10 text-center">
          <p className="text-sm uppercase tracking-widest text-gold">Incluye</p>
          <h2 className="text-3xl font-serif text-charcoal">¿Qué recibes?</h2>
          <ul className="text-left space-y-4 max-w-xl mx-auto">
            {[
              '[Número y duración de sesiones de seguimiento]',
              'Acompañamiento por WhatsApp.',
              'Precio especial para ex-clientas.',
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

      {/* Note */}
      <section className="py-16 border-b border-sand">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="border border-gold/30 bg-gold/5 p-8 space-y-3">
            <p className="text-sm uppercase tracking-widest text-gold">Importante</p>
            <p className="text-muted text-sm leading-relaxed">
              El Bonus de Continuidad está disponible exclusivamente para quienes han completado el Programa de 3 o 6 Sesiones de Expansión Alineada.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl font-serif text-charcoal">¿Lista para continuar?</h2>
          <p className="text-muted">Inversión: <span className="text-charcoal font-medium">$XX USD</span></p>
          <CTAButton href="#" label="Quiero el Bonus" />
          <p className="text-xs text-muted">¿Tienes dudas? <Link href="#" className="underline underline-offset-4 hover:text-charcoal">Escríbeme</Link>.</p>
        </div>
      </section>
    </>
  )
}
