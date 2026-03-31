import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './sanity'

const builder = sanityClient
  ? imageUrlBuilder(sanityClient)
  : null

export function urlFor(source: any) {
  return builder ? builder.image(source) : null
}
