import CTAButton from '@/components/CTAButton'
import Link from 'next/link'
import { expansionOverview, expansionProducts, site } from '@/lib/content'

export default function ExpansionAlineadaPage() {
  const eo = expansionOverview

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-sand">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <p className="text-sm uppercase tracking-widest text-gold">{eo.tag}</p>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight text-charcoal">
            {eo.title} <span className="italic">{eo.titleItalic}</span>
          </h1>
          <p className="text-muted leading-relaxed max-w-xl mx-auto">{eo.description}</p>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 border-b border-sand">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-center">
          <p className="text-sm uppercase tracking-widest text-gold">El proceso</p>
          <h2 className="text-3xl font-serif text-charcoal">{eo.methodology.title}</h2>
          <p className="text-muted leading-relaxed">{eo.methodology.description}</p>
        </div>
      </section>

      {/* Products grid — auto-generated from content.ts */}
      <section className="py-24 border-b border-sand">
        <div className="max-w-5xl mx-auto px-6 space-y-14">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-gold">Opciones</p>
            <h2 className="text-3xl font-serif text-charcoal">Elige tu camino</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expansionProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/expansion-alineada/${p.slug}`}
                className="group border border-sand bg-white p-10 flex flex-col gap-5 hover:border-gold transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-gold">{p.tag}</span>
                  {p.isFeatured && (
                    <span className="text-xs bg-gold/10 text-gold border border-gold/30 px-2 py-0.5 uppercase tracking-widest">
                      Más completo
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-serif text-charcoal group-hover:text-gold transition-colors">
                  {p.title} {p.titleItalic}
                </h3>
                <p className="text-muted text-sm leading-relaxed flex-1">{p.shortDescription}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-sand">
                  <span className="font-medium text-charcoal">{p.price}</span>
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
            {eo.testimonials.map((t, i) => (
              <div key={i} className="border border-sand bg-white p-8 space-y-4">
                <p className="text-muted text-sm leading-relaxed italic">"{t.quote}"</p>
                <p className="text-xs uppercase tracking-widest text-charcoal">— {t.author}, {t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl font-serif text-charcoal">{eo.noDecision.title}</h2>
          <p className="text-muted leading-relaxed">{eo.noDecision.description}</p>
          <CTAButton href={site.bookingLink} label={eo.noDecision.ctaLabel} />
        </div>
      </section>
    </>
  )
}
