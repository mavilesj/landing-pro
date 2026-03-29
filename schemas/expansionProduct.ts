import { defineType, defineField } from 'sanity'

export const expansionProduct = defineType({
  name: 'expansionProduct',
  title: 'Producto — Expansión Alineada',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug (URL del producto)',
      type: 'slug',
      description: 'La URL de la página. Ej: "sesion-individual" → /expansion-alineada/sesion-individual',
      options: { source: 'title', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({ name: 'order', title: 'Orden en la lista', type: 'number', description: 'Número para ordenar (1, 2, 3…)' }),
    defineField({ name: 'tag', title: 'Etiqueta corta (ej. "Sesión única")', type: 'string' }),
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'titleItalic', title: 'Título en cursiva', type: 'string' }),
    defineField({ name: 'shortDescription', title: 'Descripción corta (tarjeta)', type: 'text', rows: 2 }),
    defineField({ name: 'description', title: 'Descripción completa', type: 'text', rows: 4 }),
    defineField({ name: 'price', title: 'Precio (ej. $150 USD)', type: 'string' }),
    defineField({ name: 'priceNote', title: 'Nota de precio', type: 'string' }),
    defineField({ name: 'ctaLabel', title: 'Texto del botón', type: 'string' }),
    defineField({ name: 'isFeatured', title: '¿Destacado? (muestra badge "Más completo")', type: 'boolean' }),
    defineField({ name: 'specialNote', title: 'Nota especial (ej. requisitos)', type: 'text', rows: 2, description: 'Opcional. Si lo completas, aparece una caja destacada.' }),
    defineField({ name: 'image', title: 'Imagen', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'includes',
      title: '¿Qué incluye?',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista de beneficios incluidos.',
    }),
    defineField({
      name: 'idealFor',
      title: 'Ideal para ti si…',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'sessions',
      title: 'Desglose de sesiones (opcional)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'num', title: 'Número (ej. "01")', type: 'string' }),
            defineField({ name: 'title', title: 'Título de la sesión', type: 'string' }),
            defineField({ name: 'desc', title: 'Descripción', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'num' } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'price' },
    prepare: ({ title, subtitle }) => ({ title: title ?? 'Sin título', subtitle }),
  },
  orderings: [{ title: 'Orden', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
