import type { Block } from 'payload'
import { Attachments } from '@/blocks/Attachments'
import { Header } from '@/blocks/Header'
import { ImagesSlider } from '@/blocks/ImagesSlider'
import { TwoColumnsWithTtitles } from '@/blocks/TwoColumnsWithTtitles'

export const Tabs: Block = {
  slug: 'Tabs',
  labels: { singular: 'Zakładki', plural: 'Zakładki' },
  imageURL: '/api/media/file/tabs.png',

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
