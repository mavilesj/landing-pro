import { defineType, defineField } from 'sanity'

export const expansionOverview = defineType({
  name: 'expansionOverview',
  title: 'Expansión Alineada — General',
  type: 'document',
  fields: [
    defineField({ name: 'tag', title: 'Etiqueta', type: 'string' }),
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'titleItalic', title: 'Título en cursiva', type: 'string' }),
    defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 3 }),
    defineField({
      name: 'methodology',
      title: '¿Cómo trabajamos juntas?',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Título', type: 'string' }),
        defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 4 }),
      ],
    }),
    defineField({
      name: 'noDecision',
      title: 'Sección "¿No sabes cuál elegir?"',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Título', type: 'string' }),
        defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 2 }),
        defineField({ name: 'ctaLabel', title: 'Texto del botón', type: 'string' }),
      ],
    }),
    defineField({
      name: 'testimonials',
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
          preview: { select: { title: 'author' } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Expansión Alineada — General' }) },
})
