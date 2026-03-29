import CTAButton from '@/components/CTAButton'
import { masterclass, site } from '@/lib/content'

export default function MasterclassPage() {
  const m = masterclass

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-sand">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-widest text-gold">{m.tag}</p>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight text-charcoal">
              {m.title}
              {m.titleItalic && <><br /><span className="italic">{m.titleItalic}</span></>}
            </h1>
            <p className="text-muted leading-relaxed max-w-md">{m.description}</p>
            <div className="space-y-2">
              <p className="text-2xl font-serif text-charcoal">{m.price}</p>
              <p className="text-xs text-muted">{m.priceNote}</p>
            </div>
            <CTAButton href={site.bookingLink} label={m.ctaLabel} />
          </div>
          <div className="hidden md:flex bg-sand aspect-square items-center justify-center">
            <span className="text-muted text-sm">[ Imagen de la Masterclass ]</span>
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-24 border-b border-sand">
        <div className="max-w-3xl mx-auto px-6 space-y-10 text-center">
          <p className="text-sm uppercase tracking-widest text-gold">¿Para quién es?</p>
          <h2 className="text-3xl font-serif text-charcoal">{m.forWhom.title}</h2>
          <ul className="text-left space-y-4 max-w-xl mx-auto">
            {m.forWhom.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                <span className="text-gold mt-0.5">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 border-b border-sand">
        <div className="max-w-5xl mx-auto px-6 space-y-14">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-gold">¿Qué incluye?</p>
            <h2 className="text-3xl font-serif text-charcoal">Todo lo que recibes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {m.includes.map((item) => (
              <div key={item.title} className="border border-sand bg-white p-8 space-y-3">
                <h3 className="font-medium text-charcoal">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notion planner highlight */}
      <section className="py-24 border-b border-sand bg-sand/30">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <p className="text-sm uppercase tracking-widest text-gold">Bonus incluido</p>
          <h2 className="text-3xl font-serif text-charcoal">{m.notionPlanner.title}</h2>
          <p className="text-muted leading-relaxed">{m.notionPlanner.description}</p>
          <div className="bg-white border border-sand p-8 text-left space-y-3 max-w-md mx-auto">
            <p className="text-xs uppercase tracking-widest text-gold mb-4">La plantilla incluye</p>
            {m.notionPlanner.features.map((f, i) => (
              <div key={i} className="flex gap-3 text-sm text-muted">
                <span className="text-gold">✦</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-b border-sand">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-gold">Preguntas frecuentes</p>
            <h2 className="text-3xl font-serif text-charcoal">FAQ</h2>
          </div>
          <div className="space-y-6">
            {m.faq.map((faq, i) => (
              <div key={i} className="border-b border-sand pb-6 space-y-2">
                <h3 className="font-medium text-charcoal">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl font-serif text-charcoal">¿Lista para comenzar?</h2>
          <p className="text-muted">
            Acceso inmediato por un único pago de{' '}
            <span className="text-charcoal font-medium">{m.price}</span>
          </p>
          <CTAButton href={site.bookingLink} label={m.ctaLabel} />
        </div>
      </section>
    </>
  )
}
