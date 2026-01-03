// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig, CollectionSlug } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Procedures from './collections/Procedures'
import LegalPosts from './collections/LegalPosts'
import { Quizzes } from './collections/Quizzes'
import { Categories } from './collections/Categories'
import Theories from './collections/Theories'
import { Messages } from './collections/Messages'
import Tools from './collections/Tools'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  cors: [process.env.CORS_ORIGINS || 'http://localhost:3000'],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Procedures,
    LegalPosts,
    Quizzes,
    Categories,
    Theories,
    Messages,
    Tools,
  ],
  endpoints: [
    {
      path: '/search',
      method: 'get',
      handler: async (req) => {
        const { query } = req.query

        if (!query || typeof query !== 'string') {
          return Response.json({ error: 'Query parameter is required' }, { status: 400 })
        }

        const collections: CollectionSlug[] = ['procedures', 'legal-posts', 'quizzes', 'theories']
        const results = []

        for (const collection of collections) {
          try {
            const result = await req.payload.find({
              collection,
              where: {
                title: { contains: query },
              },
              limit: 10,
            })

            if (result.docs.length > 0) {
              results.push({
                collection,
                items: result.docs,
                total: result.totalDocs,
              })
            }
          } catch (error) {
            console.error(`Error searching ${collection}:`, error)
          }
        }

        return Response.json({ results, query })
      },
    },
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    vercelBlobStorage({
      enabled: true, // Optional, defaults to true
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
    // storage-adapter-placeholder
  ],
  globals: [
    {
      slug: 'site-settings',
      label: 'Site Settings',
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          required: true,
        },
        {
          name: 'socialLinks',
          label: 'Social Links',
          type: 'group',
          fields: [
            {
              name: 'facebook',
              label: 'Facebook URL',
              type: 'text',
            },
            {
              name: 'instagram',
              label: 'Instagram URL',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
})
