import type { CollectionConfig } from 'payload'
import slugify from 'slugify'
import { sharedBlocks } from '@/blocks/index'

const Procedures: CollectionConfig = {
  slug: 'procedures',
  labels: { singular: 'Procedura', plural: 'Procedury' },
  admin: { useAsTitle: 'title' },
  access: {
    read: ({ req }) => {
      if (req?.user) return true
      return req.headers.get('x-internal-token') === process.env.PAYLOAD_API_KEY
      return false
    },
  },
  fields: [
    { name: 'title', label: 'Tytuł', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      unique: true,
      admin: {
        readOnly: true,
      },
    },
    { name: 'subtitle', label: 'Podtytuł', type: 'text' },
    {
      name: 'zdjecie',
      label: 'Zdjęcia główne',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      label: 'Treść artykułu',
      type: 'blocks',
      required: true,
      blocks: sharedBlocks,
    },
    {
      name: 'category',
      label: 'Powiązana kategoria',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false,
    },
    { name: 'published', label: 'Opublikowany', type: 'checkbox' },
  ],
  hooks: {
    beforeChange: [
      async ({ data, operation }) => {
        if (data?.title) {
          data.slug = slugify(data.title, {
            lower: true,
            strict: true,
            locale: 'pl',
          })
        }
        if (!data?.slug && data?.name) {
          data.slug = slugify(data.name, {
            lower: true,
            strict: true,
            locale: 'pl',
          })
        }
        return data
      },
    ],
  },
}

export default Procedures
