import type { Block } from 'payload'

export const Highlighted: Block = {
  slug: 'Highlighted',
  labels: { singular: 'Wyróżniona treść', plural: 'Wyróżniona treść' },
  imageURL: '/api/media/file/highlighted.png',

  fields: [
    {
      name: 'content',
      label: 'Kontent',
      type: 'richText',
      required: true,
    },
  ],
}
