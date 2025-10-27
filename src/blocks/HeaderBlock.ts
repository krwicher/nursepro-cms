import type { Block } from 'payload'

export const HeaderBlock: Block = {
  slug: 'tekst',
  labels: { singular: 'Tekst', plural: 'Teksty' },
  fields: [
    {
      name: 'text',
      label: 'Treść',
      type: 'richText',
      required: true,
    },
    {
      name: 'zdjecie',
      label: 'Treść',
      type: 'text',
      required: true,
    },
  ],
}
