import { notFound } from 'next/navigation'
import Link from 'next/link'
import CTAButton from '@/components/CTAButton'
import { expansionProducts, site } from '@/lib/content'

interface Props {
  params: { slug: string }
}

// Generates static pages at build time for each product slug
export function generateStaticParams() {
  return expansionProducts.map((p) => ({ slug: p.slug }))
}

export default function ProductPage({ params }: Props) {
  const product = expansionProducts.find((p) => p.slug === params.slug)

  if (!product) notFound()

  const p = product

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-sand">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Link
              href="/expansion-alineada"
              className="text-xs uppercase tracking-widest text-muted hover:text-gold transition-colors"
            >
              ← Expansión Alineada
            </Link>
            <p className="text-sm uppercase tracking-widest text-gold">{p.tag}</p>

            {p.isFeatured && (
              <div className="inline-block bg-gold/10 border border-gold/30 px-3 py-1">
                <span className="text-xs text-gold uppercase tracking-widest">Más completo</span>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-serif leading-tight text-charcoal">
              {p.title}
              {p.titleItalic && (
                <>
                  <br />
                  <span className="italic">{p.titleItalic}</span>
                </>
              )}
            </h1>
            <p className="text-muted leading-relaxed max-w-md">{p.description}</p>
            <div className="space-y-1">
              <p className="text-2xl font-serif text-charcoal">{p.price}</p>
              <p className="text-xs text-muted">{p.priceNote}</p>
            </div>
            <CTAButton href={site.bookingLink} label={p.ctaLabel} />
          </div>

          <div className="hidden md:flex bg-sand aspect-square items-center justify-center">
            <span className="text-muted text-sm">[ Imagen ]</span>
          </div>
        </div>
      </section>

      {/* Sessions breakdown (only if product has sessions) */}
      {p.sessions.length > 0 && (
        <section className="py-24 border-b border-sand">
          <div className="max-w-3xl mx-auto px-6 space-y-12">
            <div className="text-center space-y-4">
              <p className="text-sm uppercase tracking-widest text-gold">El proceso</p>
              <h2 className="text-3xl font-serif text-charcoal">Las sesiones</h2>
            </div>
            <div className={`gap-6 ${p.sessions.length > 3 ? 'grid md:grid-cols-2' : 'space-y-6'}`}>
              {p.sessions.map((s) => (
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
      )}

      {/* What's included */}
      <section className="py-24 border-b border-sand bg-sand/20">
        <div className="max-w-3xl mx-auto px-6 space-y-10 text-center">
          <p className="text-sm uppercase tracking-widest text-gold">Incluye</p>
          <h2 className="text-3xl font-serif text-charcoal">¿Qué recibes?</h2>
          <ul className="text-left space-y-4 max-w-xl mx-auto">
            {p.includes.map((item, i) => (
              <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                <span className="text-gold mt-0.5">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ideal for */}
      <section className="py-24 border-b border-sand">
        <div className="max-w-3xl mx-auto px-6 space-y-10 text-center">
          <p className="text-sm uppercase tracking-widest text-gold">Ideal para ti si…</p>
          <ul className="text-left space-y-4 max-w-xl mx-auto">
            {p.idealFor.map((item, i) => (
              <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                <span className="text-gold mt-0.5">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Special note (e.g. bonus continuity restriction) */}
      {p.specialNote && (
        <section className="py-16 border-b border-sand">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="border border-gold/30 bg-gold/5 p-8 space-y-3">
              <p className="text-sm uppercase tracking-widest text-gold">Importante</p>
              <p className="text-muted text-sm leading-relaxed">{p.specialNote}</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl font-serif text-charcoal">¿Lista para comenzar?</h2>
          <p className="text-muted">
            Inversión:{' '}
            <span className="text-charcoal font-medium">{p.price}</span>
          </p>
          <CTAButton href={site.bookingLink} label={p.ctaLabel} />
          <p className="text-xs text-muted">
            ¿Tienes dudas?{' '}
            <Link href={site.contactLink} className="underline underline-offset-4 hover:text-charcoal">
              Escríbeme
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
