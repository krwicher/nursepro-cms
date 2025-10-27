import type { Block } from 'payload'

export const RichText: Block = {
  slug: 'RichText',
  labels: { singular: 'Edytor treści', plural: 'Edytory treści' },
  imageURL: '/api/media/file/richtext.png',

  fields: [
    {
      name: 'content',
      label: 'Kontent',
      type: 'richText',
      required: true,
    },
  ],
}
