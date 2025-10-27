import type { CollectionConfig } from 'payload'
import slugify from 'slugify'

const Theories: CollectionConfig = {
  slug: 'theories',
  labels: { singular: 'Theory', plural: 'Theories' },
  admin: { useAsTitle: 'title' },
  access: { read: () => true, create: () => true, update: () => true, delete: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      unique: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    { name: 'published', type: 'checkbox' },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false,
    },
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

export default Theories
