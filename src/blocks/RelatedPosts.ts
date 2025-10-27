import type { Block } from 'payload'

export const RelatedPosts: Block = {
  slug: 'RelatedPosts',
  labels: { singular: 'Powiązane procedury', plural: 'Powiązane procedury' },
  imageURL: '/api/media/file/related.png',

  fields: [
    {
      name: 'title',
      label: 'Nazwa techniki',
      type: 'text',
    },
    {
      name: 'realtedPosts',
      label: 'Powiązane procedury',
      type: 'array',
      fields: [
        {
          name: 'procedure',
          label: 'Procedura',
          type: 'relationship',
          relationTo: 'procedures',
        },
      ],
    },
  ],
}
