import Link from 'next/link'

interface CTAButtonProps {
  href: string
  label: string
  variant?: 'primary' | 'outline'
}

export default function CTAButton({ href, label, variant = 'primary' }: CTAButtonProps) {
  const base = 'inline-block text-sm px-8 py-3 transition-colors font-medium tracking-wide'
  const styles = {
    primary: `${base} bg-charcoal text-cream hover:bg-gold hover:text-white`,
    outline: `${base} border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream`,
  }

  return (
    <Link href={href} className={styles[variant]}>
      {label}
    </Link>
  )
}
