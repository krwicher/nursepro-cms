import type { Block } from 'payload'

export const MediaTab: Block = {
  slug: 'MediaTab',
  labels: {
    singular: 'Zakładka media',
    plural: 'Zakładka media',
  },
  imageURL: '/api/media/file/mediatab.png',
  fields: [
    {
      name: 'title',
      label: 'Tytuł',
      type: 'text',
    },
    {
      name: 'desc',
      label: 'Opis',
      type: 'text',
    },
    {
      name: 'images',
      label: 'Zdjęcia',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      required: false,
      admin: {
        description: 'Wybierz jedno lub więcej zdjęć z biblioteki mediów.',
      },
    },
  ],
}
