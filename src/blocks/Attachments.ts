import type { Block } from 'payload'

export const Attachments: Block = {
  slug: 'Attachments',
  labels: { singular: 'Załącznik', plural: 'Załączniki' },
  imageURL: '/api/media/file/attachments.png',
  fields: [
    {
      name: 'title',
      label: 'Tytuł',
      type: 'text',
      required: true,
    },
    {
      name: 'attachments',
      label: 'Załączniki',
      type: 'array',
      fields: [
        {
          name: 'fileName',
          type: 'text',
          label: 'Nazwa pliku',
          required: true,
        },
        {
          name: 'file',
          type: 'upload',
          label: 'Plik',
          relationTo: 'media',
        },
      ],
    },
  ],
}
