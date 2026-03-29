import CTAButton from '@/components/CTAButton'
import Link from 'next/link'
import { fetchSanity, queries } from '@/lib/sanity'
import {
  home as homeDefault,
  site as siteDefault,
  masterclass as masterclassDefault,
  expansionOverview as expansionOverviewDefault,
  expansionProducts as expansionProductsDefault,
} from '@/lib/content'

export const revalidate = 60

export default async function Home() {
  const [sanityHome, sanitySite, sanityMasterclass, sanityExpansion, sanityProducts] =
    await Promise.all([
      fetchSanity<any>(queries.homePage),
      fetchSanity<any>(queries.siteSettings),
      fetchSanity<any>(queries.masterclassPage),
      fetchSanity<any>(queries.expansionOverview),
      fetchSanity<any[]>(queries.expansionProducts),
    ])

  // Merge Sanity data with defaults from content.ts
  const site = sanitySite ?? siteDefault
  const home = {
    hero: {
      greeting: sanityHome?.hero?.greeting ?? homeDefault.hero.greeting,
      name: sanityHome?.hero?.name ?? homeDefault.hero.name,
      description: sanityHome?.hero?.description ?? homeDefault.hero.description,
      ctaPrimary: {
        label: sanityHome?.hero?.ctaPrimaryLabel ?? homeDefault.hero.ctaPrimary.label,
        href: sanityHome?.hero?.ctaPrimaryHref ?? homeDefault.hero.ctaPrimary.href,
      },
      ctaSecondary: {
        label: sanityHome?.hero?.ctaSecondaryLabel ?? homeDefault.hero.ctaSecondary.label,
        href: sanityHome?.hero?.ctaSecondaryHref ?? homeDefault.hero.ctaSecondary.href,
      },
    },
    about: {
      title: sanityHome?.about?.title ?? homeDefault.about.title,
      paragraphs: sanityHome?.about?.paragraphs ?? homeDefault.about.paragraphs,
    },
    productsSection: {
      title: sanityHome?.productsSectionTitle ?? homeDefault.productsSection.title,
    },
    testimonials: {
      title: sanityHome?.testimonials?.title ?? homeDefault.testimonials.title,
      items: sanityHome?.testimonials?.items?.length
        ? sanityHome.testimonials.items
        : homeDefault.testimonials.items,
    },
    contact: {
      title: sanityHome?.contact?.title ?? homeDefault.contact.title,
      description: sanityHome?.contact?.description ?? homeDefault.contact.description,
      ctaLabel: sanityHome?.contact?.ctaLabel ?? homeDefault.contact.ctaLabel,
    },
  }

  const masterclass = sanityMasterclass ?? masterclassDefault
  const expansion = sanityExpansion ?? expansionOverviewDefault
  const products = sanityProducts?.length ? sanityProducts : expansionProductsDefault

  const productCards = [
    {
      title: 'Masterclass',
      description: masterclass.shortDescription ?? masterclass.description,
      href: '/masterclass',
      tag: masterclass.tag,
    },
    {
      title: `${expansion.title} ${expansion.titleItalic}`,
      description: expansion.description,
      href: '/expansion-alineada',
      tag: expansion.tag,
    },
  ]

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
            <p className="text-muted leading-relaxed text-base max-w-md">{home.hero.description}</p>
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
          {home.about.paragraphs.map((p: string, i: number) => (
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
              <Link key={p.href} href={p.href} className="group border border-sand bg-white p-10 flex flex-col gap-5 hover:border-gold transition-colors">
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
            {home.testimonials.items.map((t: any, i: number) => (
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
          <CTAButton href={site.bookingLink ?? siteDefault.bookingLink} label={home.contact.ctaLabel} />
        </div>
      </section>
    </>
  )
}
