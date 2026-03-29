import { defineType, defineField } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Página de inicio',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Sección Hero',
      type: 'object',
      fields: [
        defineField({ name: 'greeting', title: 'Saludo (ej. "Hola, soy")', type: 'string' }),
        defineField({ name: 'name', title: 'Tu nombre', type: 'string' }),
        defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 3 }),
        defineField({ name: 'ctaPrimaryLabel', title: 'Botón principal — texto', type: 'string' }),
        defineField({ name: 'ctaPrimaryHref', title: 'Botón principal — link', type: 'string' }),
        defineField({ name: 'ctaSecondaryLabel', title: 'Botón secundario — texto', type: 'string' }),
        defineField({ name: 'ctaSecondaryHref', title: 'Botón secundario — link', type: 'string' }),
        defineField({ name: 'image', title: 'Tu foto', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'Sección Sobre mí',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Título', type: 'string' }),
        defineField({
          name: 'paragraphs',
          title: 'Párrafos',
          type: 'array',
          of: [{ type: 'text' }],
          description: 'Cada elemento es un párrafo separado.',
        }),
      ],
    }),
    defineField({ name: 'productsSectionTitle', title: 'Título sección productos', type: 'string' }),
    defineField({
      name: 'testimonials',
      title: 'Testimonios',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Título', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Testimonios',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'quote', title: 'Testimonio', type: 'text', rows: 3 }),
                defineField({ name: 'author', title: 'Nombre', type: 'string' }),
                defineField({ name: 'location', title: 'País', type: 'string' }),
              ],
              preview: { select: { title: 'author', subtitle: 'location' } },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Sección Contacto',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Título', type: 'string' }),
        defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 2 }),
        defineField({ name: 'ctaLabel', title: 'Texto del botón', type: 'string' }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Página de inicio' }) },
})
