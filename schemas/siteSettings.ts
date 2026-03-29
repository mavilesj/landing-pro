import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuración del sitio',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nombre del sitio', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline (ej. Coaching · Mentoría)', type: 'string' }),
    defineField({ name: 'description', title: 'Descripción general', type: 'text', rows: 2 }),
    defineField({ name: 'bookingLink', title: 'Link de reserva (Calendly, WhatsApp…)', type: 'url' }),
    defineField({ name: 'contactLink', title: 'Link de contacto', type: 'url' }),
  ],
  preview: { select: { title: 'name' } },
})
