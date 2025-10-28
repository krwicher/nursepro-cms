// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Procedures from './collections/Procedures'
import LegalPosts from './collections/LegalPosts'
import { Quizzes } from './collections/Quizzes'
import { Categories } from './collections/Categories'
import Theories from './collections/Theories'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: 'http://localhost:4000',
  cors: ['http://localhost:3000'],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Procedures, LegalPosts, Quizzes, Categories, Theories],
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
          name: 'phone',
          label: 'Phone Number',
          type: 'text',
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
