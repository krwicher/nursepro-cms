import type { Block } from 'payload'
import { Attachments } from '@/blocks/Attachments'
import { Header } from '@/blocks/Header'
import { ImagesSlider } from '@/blocks/ImagesSlider'
import { TwoColumnsWithTtitles } from '@/blocks/TwoColumnsWithTtitles'
import { DropdownList } from './DropdownList'
import { MediaTab } from './MediaTab'
import { RichText } from './RichText'
import { ImageBlock } from './ImageBlock'
import { Highlighted } from './Highlighted'

export const Tabs: Block = {
  slug: 'Tabs',
  labels: { singular: 'Zakładki', plural: 'Zakładki' },
  imageURL: '/api/media/file/tabs.png',

  fields: [
    {
      name: 'smallLabel',
      label: 'Małe etykiety',
      type: 'checkbox',
    },
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
          blocks: [
            Header,
            Attachments,
            ImagesSlider,
            TwoColumnsWithTtitles,
            MediaTab,
            DropdownList,
            ImageBlock,
            Highlighted,
            RichText,
          ],
        },
      ],
    },
  ],
}
