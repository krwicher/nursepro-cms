import { sharedBlocks } from '@/blocks/index'

import type { CollectionConfig } from 'payload'
import slugify from 'slugify'

const Theories: CollectionConfig = {
  slug: 'theories',
  labels: { singular: 'Teoria', plural: 'Teorie' },
  admin: { useAsTitle: 'title' },
  access: {
    read: () => true,
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
    { name: 'estimation', label: 'Czas', type: 'text' },
    { name: 'zajawka', label: 'Zajawka', type: 'textarea' },

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

export default Theories
