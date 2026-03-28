import CTAButton from '@/components/CTAButton'
import Link from 'next/link'

const options = [
  {
    title: 'Sesión Individual',
    tag: '2.a',
    desc: 'Una sesión única de coaching para trabajar un tema concreto con claridad y profundidad.',
    price: '$XX USD',
    href: '/expansion-alineada/sesion-individual',
  },
  {
    title: 'Programa 3 Sesiones',
    tag: '2.b',
    desc: 'Un proceso de tres sesiones diseñado para generar un avance real y sostenido en tu vida o negocio.',
    price: '$XX USD',
    href: '/expansion-alineada/programa-3-sesiones',
  },
  {
    title: 'Programa 6 Sesiones',
    tag: '2.c',
    desc: 'El programa más completo para una transformación profunda. Seis sesiones de acompañamiento personalizado.',
    price: '$XX USD',
    href: '/expansion-alineada/programa-6-sesiones',
  },
  {
    title: 'Bonus de Continuidad',
    tag: '2.d',
    desc: 'Un espacio de seguimiento para quienes ya han trabajado conmigo y desean mantener el impulso de su proceso.',
    price: '$XX USD',
    href: '/expansion-alineada/bonus-continuidad',
  },
]

export default function ExpansionAlineadaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-sand">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <p className="text-sm uppercase tracking-widest text-gold">Programa de coaching</p>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight text-charcoal">
            Expansión <span className="italic">Alineada</span>
          </h1>
          <p className="text-muted leading-relaxed max-w-xl mx-auto">
            Un acompañamiento consciente y personalizado para que te muevas desde donde estás hacia donde quieres estar — con claridad, intención y alineación.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="py-24 border-b border-sand">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-center">
          <p className="text-sm uppercase tracking-widest text-gold">El proceso</p>
          <h2 className="text-3xl font-serif text-charcoal">¿Cómo trabajamos juntas?</h2>
          <p className="text-muted leading-relaxed">
            [Descripción de tu metodología, enfoque de trabajo o filosofía de coaching. ¿Qué hace especial tu acompañamiento? ¿Qué pueden esperar las clientas durante el proceso?]
          </p>
        </div>
      </section>

      {/* Options grid */}
      <section className="py-24 border-b border-sand">
        <div className="max-w-5xl mx-auto px-6 space-y-14">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-gold">Opciones</p>
            <h2 className="text-3xl font-serif text-charcoal">Elige tu camino</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {options.map((o) => (
              <Link
                key={o.href}
                href={o.href}
                className="group border border-sand bg-white p-10 flex flex-col gap-5 hover:border-gold transition-colors"
              >
                <span className="text-xs uppercase tracking-widest text-gold">{o.tag}</span>
                <h3 className="text-xl font-serif text-charcoal group-hover:text-gold transition-colors">{o.title}</h3>
                <p className="text-muted text-sm leading-relaxed flex-1">{o.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-sand">
                  <span className="font-medium text-charcoal">{o.price}</span>
                  <span className="text-sm text-charcoal underline underline-offset-4">Ver detalles →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-b border-sand">
        <div className="max-w-5xl mx-auto px-6 space-y-14">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-gold">Resultados</p>
            <h2 className="text-3xl font-serif text-charcoal">Lo que dicen mis clientas</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="border border-sand bg-white p-8 space-y-4">
                <p className="text-muted text-sm leading-relaxed italic">
                  "[Testimonio de clienta que trabajó en el programa Expansión Alineada. Resultado real y transformador.]"
                </p>
                <p className="text-xs uppercase tracking-widest text-charcoal">— Nombre, País</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl font-serif text-charcoal">¿No sabes cuál elegir?</h2>
          <p className="text-muted leading-relaxed">
            Podemos tener una llamada gratuita de 20 minutos para encontrar juntas la opción que mejor se ajusta a tu momento actual.
          </p>
          <CTAButton href="#" label="Reservar llamada gratuita" />
        </div>
      </section>
    </>
  )
}
