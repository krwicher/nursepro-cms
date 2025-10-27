import type { Block } from 'payload'

export const ImagesSlider: Block = {
  slug: 'ImagesSlider',
  labels: { singular: 'Slider zdjęć', plural: 'Slidery' },
  imageURL: '/api/media/file/slider.png',
  fields: [
    {
      name: 'images',
      label: 'Zdjęcia',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Zdjęcie',
          relationTo: 'media',
        },
      ],
    },
  ],
}
