import { defineType, defineField } from 'sanity'

export const masterclassPage = defineType({
  name: 'masterclassPage',
  title: 'Masterclass',
  type: 'document',
  fields: [
    defineField({ name: 'tag', title: 'Etiqueta (ej. "Recurso digital")', type: 'string' }),
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'titleItalic', title: 'Título en cursiva (opcional)', type: 'string' }),
    defineField({ name: 'shortDescription', title: 'Descripción corta (para tarjeta en inicio)', type: 'text', rows: 2 }),
    defineField({ name: 'description', title: 'Descripción completa', type: 'text', rows: 4 }),
    defineField({ name: 'price', title: 'Precio (ej. $97 USD)', type: 'string' }),
    defineField({ name: 'priceNote', title: 'Nota de precio (ej. "Pago único")', type: 'string' }),
    defineField({ name: 'ctaLabel', title: 'Texto del botón de compra', type: 'string' }),
    defineField({ name: 'image', title: 'Imagen', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'forWhom',
      title: '¿Para quién es?',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Título', type: 'string' }),
        defineField({ name: 'items', title: 'Ítems', type: 'array', of: [{ type: 'string' }] }),
      ],
    }),
    defineField({
      name: 'includes',
      title: '¿Qué incluye?',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Título', type: 'string' }),
            defineField({ name: 'desc', title: 'Descripción', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),
    defineField({
      name: 'notionPlanner',
      title: 'Planificador Notion',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Título', type: 'string' }),
        defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 3 }),
        defineField({ name: 'features', title: 'Características incluidas', type: 'array', of: [{ type: 'string' }] }),
      ],
    }),
    defineField({
      name: 'faq',
      title: 'Preguntas frecuentes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'q', title: 'Pregunta', type: 'string' }),
            defineField({ name: 'a', title: 'Respuesta', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'q' } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Masterclass' }) },
})
