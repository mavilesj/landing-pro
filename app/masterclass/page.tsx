import CTAButton from '@/components/CTAButton'

const includes = [
  { title: 'Masterclass en video', desc: 'Acceso inmediato y de por vida a la grabación completa.' },
  { title: 'Planificador Notion', desc: 'Una plantilla diseñada para que puedas aplicar lo aprendido de forma organizada y efectiva.' },
  { title: 'Material de apoyo', desc: '[Descripción del material complementario que se incluye.]' },
  { title: 'Acceso a comunidad', desc: '[Descripción del espacio de comunidad si aplica.]' },
]

export default function MasterclassPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-sand">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-widest text-gold">Recurso digital</p>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight text-charcoal">
              [Nombre de la<br />
              <span className="italic">Masterclass]</span>
            </h1>
            <p className="text-muted leading-relaxed max-w-md">
              [Descripción principal de la masterclass. ¿Qué aprenderás? ¿A quién va dirigida? ¿Cuál es la transformación que obtendrán?]
            </p>
            <div className="space-y-2">
              <p className="text-2xl font-serif text-charcoal">$XX USD</p>
              <p className="text-xs text-muted">Pago único · Acceso inmediato</p>
            </div>
            <CTAButton href="#" label="Quiero la Masterclass" />
          </div>

          {/* Placeholder */}
          <div className="hidden md:flex bg-sand aspect-square items-center justify-center">
            <span className="text-muted text-sm">[ Imagen de la Masterclass ]</span>
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-24 border-b border-sand">
        <div className="max-w-3xl mx-auto px-6 space-y-10 text-center">
          <p className="text-sm uppercase tracking-widest text-gold">¿Para quién es?</p>
          <h2 className="text-3xl font-serif text-charcoal">Esta masterclass es para ti si…</h2>
          <ul className="text-left space-y-4 max-w-xl mx-auto">
            {[
              '[Situación o dolor específico de tu cliente ideal]',
              '[Deseo o meta que quieren alcanzar]',
              '[Obstáculo que enfrentan actualmente]',
              '[Transformación que están buscando]',
            ].map((item, i) => (
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
            {includes.map((item) => (
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
          <h2 className="text-3xl font-serif text-charcoal">Planificador Notion</h2>
          <p className="text-muted leading-relaxed">
            Recibirás una plantilla de Notion lista para usar, diseñada específicamente para que puedas organizar y aplicar cada aprendizaje de la masterclass en tu vida diaria.
          </p>
          <div className="bg-white border border-sand p-8 text-left space-y-3 max-w-md mx-auto">
            <p className="text-xs uppercase tracking-widest text-gold mb-4">La plantilla incluye</p>
            {[
              '[Sección del planificador 1]',
              '[Sección del planificador 2]',
              '[Sección del planificador 3]',
            ].map((s, i) => (
              <div key={i} className="flex gap-3 text-sm text-muted">
                <span className="text-gold">✦</span>
                <span>{s}</span>
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
            {[
              { q: '¿Cuándo recibo el acceso?', a: 'Inmediatamente después de completar tu pago recibirás un email con todos los accesos.' },
              { q: '¿Por cuánto tiempo tengo acceso?', a: 'El acceso es de por vida. Puedes revisitar el contenido cuando quieras.' },
              { q: '¿Hay garantía?', a: '[Descripción de tu política de garantía o reembolso.]' },
              { q: '¿Necesito conocer Notion para usar el planificador?', a: 'No es necesario. La plantilla está diseñada para ser intuitiva y fácil de usar desde el primer momento.' },
            ].map((faq, i) => (
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
          <p className="text-muted">Acceso inmediato por un único pago de <span className="text-charcoal font-medium">$XX USD</span></p>
          <CTAButton href="#" label="Quiero la Masterclass" />
        </div>
      </section>
    </>
  )
}
