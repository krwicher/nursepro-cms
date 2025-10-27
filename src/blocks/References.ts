import type { Block } from 'payload'

export const References: Block = {
  slug: 'References',
  labels: { singular: 'Literatura', plural: 'Literatura' },
  imageURL: '/api/media/file/literatura.png',

  fields: [
    {
      name: 'title',
      label: 'Tytuł sekcji',
      type: 'text',
      required: true,
    },
    {
      name: 'references',
      label: 'Literatura',
      type: 'array',
      fields: [{ name: 'reference', label: 'Pozycja', type: 'text' }],
    },
  ],
}
