import CTAButton from '@/components/CTAButton'
import Link from 'next/link'
import { home, site, masterclass, expansionOverview, expansionProducts } from '@/lib/content'

const productCards = [
  {
    title: 'Masterclass',
    description: masterclass.shortDescription ?? masterclass.description.slice(0, 120) + '…',
    href: '/masterclass',
    tag: masterclass.tag,
  },
  {
    title: `${expansionOverview.title} ${expansionOverview.titleItalic}`,
    description: expansionOverview.description,
    href: '/expansion-alineada',
    tag: expansionOverview.tag,
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-widest text-gold">{site.tagline}</p>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight text-charcoal">
              {home.hero.greeting} <br />
              <span className="italic">{home.hero.name}</span>
            </h1>
            <p className="text-muted leading-relaxed text-base max-w-md">
              {home.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href={home.hero.ctaPrimary.href} label={home.hero.ctaPrimary.label} />
              <CTAButton href={home.hero.ctaSecondary.href} label={home.hero.ctaSecondary.label} variant="outline" />
            </div>
          </div>

          <div className="hidden md:flex bg-sand aspect-[3/4] w-full max-w-sm mx-auto items-center justify-center">
            <span className="text-muted text-sm">[ Tu foto aquí ]</span>
          </div>
        </div>
      </section>

      <div className="border-t border-sand" />

      {/* About */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <p className="text-sm uppercase tracking-widest text-gold">Sobre mí</p>
          <h2 className="text-3xl font-serif text-charcoal">{home.about.title}</h2>
          {home.about.paragraphs.map((p, i) => (
            <p key={i} className="text-muted leading-relaxed">{p}</p>
          ))}
        </div>
      </section>

      <div className="border-t border-sand" />

      {/* Products */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-14">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-gold">Lo que ofrezco</p>
            <h2 className="text-3xl font-serif text-charcoal">{home.productsSection.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {productCards.map((p) => (
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

      <div className="border-t border-sand" />

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-14">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-gold">Testimonios</p>
            <h2 className="text-3xl font-serif text-charcoal">{home.testimonials.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {home.testimonials.items.map((t, i) => (
              <div key={i} className="border border-sand bg-white p-8 space-y-4">
                <p className="text-muted text-sm leading-relaxed italic">"{t.quote}"</p>
                <p className="text-xs uppercase tracking-widest text-charcoal">— {t.author}, {t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-sand" />

      {/* Contact */}
      <section id="contacto" className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center space-y-8">
          <p className="text-sm uppercase tracking-widest text-gold">¿Lista para comenzar?</p>
          <h2 className="text-3xl font-serif text-charcoal">{home.contact.title}</h2>
          <p className="text-muted leading-relaxed">{home.contact.description}</p>
          <CTAButton href={site.bookingLink} label={home.contact.ctaLabel} />
        </div>
      </section>
    </>
  )
}
