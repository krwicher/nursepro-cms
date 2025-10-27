import type { Block } from 'payload'

export const ImagesSlider: Block = {
  slug: 'images-slider',
  labels: { singular: 'Slider zdjęć', plural: 'Slidery' },
  fields: [
    {
      name: 'images',
      label: 'Zdjęcia',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Plik',
          relationTo: 'media',
        },
      ],
    },
  ],
}
