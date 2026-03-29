import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const isSanityConfigured = Boolean(projectId)

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: false,
    })
  : null

// Returns null if Sanity is not configured yet — pages fall back to content.ts
export async function fetchSanity<T>(query: string): Promise<T | null> {
  if (!sanityClient) return null
  try {
    return await sanityClient.fetch<T>(query)
  } catch {
    return null
  }
}

export const queries = {
  siteSettings: `*[_type == "siteSettings"][0]`,
  homePage: `*[_type == "homePage"][0]`,
  masterclassPage: `*[_type == "masterclassPage"][0]`,
  expansionOverview: `*[_type == "expansionOverview"][0]`,
  expansionProducts: `*[_type == "expansionProduct"] | order(order asc)`,
  expansionProductBySlug: (slug: string) =>
    `*[_type == "expansionProduct" && slug.current == "${slug}"][0]`,
}
