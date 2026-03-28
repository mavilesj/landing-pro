import CTAButton from '@/components/CTAButton'
import Link from 'next/link'

const products = [
  {
    title: 'Masterclass',
    description:
      'Una experiencia de aprendizaje profundo que incluye un planificador de Notion diseñado para acompañarte en tu proceso.',
    href: '/masterclass',
    tag: 'Recurso digital',
  },
  {
    title: 'Expansión Alineada',
    description:
      'Un programa de coaching personalizado que se adapta a tu ritmo y necesidades. Sesiones individuales y paquetes disponibles.',
    href: '/expansion-alineada',
    tag: 'Programa de coaching',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-widest text-gold">Coaching · Mentoría</p>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight text-charcoal">
              Hola, soy <br />
              <span className="italic">Pri Chaves</span>
            </h1>
            <p className="text-muted leading-relaxed text-base max-w-md">
              Acompaño a mujeres en su proceso de expansión personal y profesional, desde un lugar consciente, auténtico y alineado con quienes realmente son.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/expansion-alineada" label="Ver programas" />
              <CTAButton href="/masterclass" label="Conocer la Masterclass" variant="outline" />
            </div>
          </div>

          {/* Placeholder image */}
          <div className="hidden md:block bg-sand aspect-[3/4] w-full max-w-sm mx-auto flex items-center justify-center">
            <span className="text-muted text-sm">[ Tu foto aquí ]</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-sand" />

      {/* About */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <p className="text-sm uppercase tracking-widest text-gold">Sobre mí</p>
          <h2 className="text-3xl font-serif text-charcoal">¿Por qué trabajar conmigo?</h2>
          <p className="text-muted leading-relaxed">
            [Espacio para tu historia. Cuéntale a tu audiencia quién eres, cuál es tu misión y qué te hace diferente como coach y mentora.]
          </p>
          <p className="text-muted leading-relaxed">
            [Formación, experiencia, enfoque de trabajo — añade lo que resuene con tu esencia y conecte con tu cliente ideal.]
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-sand" />

      {/* Products */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-14">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-gold">Lo que ofrezco</p>
            <h2 className="text-3xl font-serif text-charcoal">Formas de trabajar juntas</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group border border-sand bg-white p-10 flex flex-col gap-5 hover:border-gold transition-colors"
              >
                <span className="text-xs uppercase tracking-widest text-gold">{p.tag}</span>
                <h3 className="text-xl font-serif text-charcoal group-hover:text-gold transition-colors">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.description}</p>
                <span className="text-sm text-charcoal underline underline-offset-4 mt-auto">Ver más →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-sand" />

      {/* Testimonials placeholder */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-14">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-gold">Testimonios</p>
            <h2 className="text-3xl font-serif text-charcoal">Lo que dicen mis clientas</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-sand bg-white p-8 space-y-4">
                <p className="text-muted text-sm leading-relaxed italic">
                  "[Testimonio de clienta {i}. Resultado transformador, experiencia real.]"
                </p>
                <p className="text-xs uppercase tracking-widest text-charcoal">— Nombre, País</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-sand" />

      {/* Contact CTA */}
      <section id="contacto" className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center space-y-8">
          <p className="text-sm uppercase tracking-widest text-gold">¿Lista para comenzar?</p>
          <h2 className="text-3xl font-serif text-charcoal">Hablemos</h2>
          <p className="text-muted leading-relaxed">
            Si sientes que es el momento de dar el siguiente paso, estoy aquí para acompañarte.
          </p>
          <CTAButton href="#" label="Reservar una llamada" />
        </div>
      </section>
    </>
  )
}
