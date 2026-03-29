'use client'

import dynamic from 'next/dynamic'

// Load Sanity Studio client-side only to avoid webpack bundling issues
const Studio = dynamic(
  () => import('./Studio'),
  { ssr: false, loading: () => <div style={{ padding: 40 }}>Cargando editor…</div> }
)

export default function StudioPage() {
  return <Studio />
}
