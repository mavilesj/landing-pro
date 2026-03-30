import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

// Singleton documents (only one of each)
const singletons = new Set(['siteSettings', 'homePage', 'masterclassPage', 'expansionOverview'])

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'missing-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'Pri Chaves — Panel de contenido',
  schema: { types: schemaTypes },
  plugins: [structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem()
              .title('⚙️ Configuración del sitio')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.listItem()
              .title('🏠 Página de inicio')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem()
              .title('🎓 Masterclass')
              .child(S.document().schemaType('masterclassPage').documentId('masterclassPage')),
            S.listItem()
              .title('✨ Expansión Alineada — General')
              .child(S.document().schemaType('expansionOverview').documentId('expansionOverview')),
            S.divider(),
            S.listItem()
              .title('📦 Productos — Expansión Alineada')
              .child(
                S.documentList()
                  .title('Productos')
                  .filter('_type == "expansionProduct"')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),
          ]),
  })],
})
