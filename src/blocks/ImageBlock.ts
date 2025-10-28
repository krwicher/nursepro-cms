import type { Block } from 'payload'

export const ImageBlock: Block = {
  slug: 'ImageBlock',
  imageURL: '/api/media/file/image.png',

  labels: { singular: 'Zdjęcie', plural: 'Zdjęcia' },
  fields: [
    {
      name: 'image',
      type: 'upload',
      label: 'Plik',
      relationTo: 'media',
    },
  ],
}
