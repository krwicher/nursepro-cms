import type { Block } from 'payload'
import { Attachments } from '@/blocks/Attachments'
import { Header } from '@/blocks/Header'
import { ImagesSlider } from '@/blocks/ImagesSlider'
import { TwoColumnsWithTtitles } from '@/blocks/TwoColumnsWithTtitles'

export const DropdownList: Block = {
  slug: 'DropdownList',
  labels: { singular: 'Lista dropdown', plural: 'Lista dropdown' },
  imageURL: '/api/media/file/dropdown.png',

  fields: [
    {
      name: 'tabs',
      label: 'Zakładki',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          label: 'Zawartość zakładki',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          label: 'Ikona',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'content',
          label: 'Zawartość zakładki',
          type: 'blocks',
          required: true,
          blocks: [Header, Attachments, ImagesSlider, TwoColumnsWithTtitles],
        },
      ],
    },
  ],
}
