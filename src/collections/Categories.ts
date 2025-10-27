import type { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Kategoria',
    plural: 'Kategorie',
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
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
      name: 'image',
      type: 'upload',
      label: 'Zdjęcie kategorii',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: ['categories'],
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
