import type { Block } from 'payload'

export const TwoColumnsWithTtitles: Block = {
  slug: 'TwoColumnsWithTtitles',
  labels: { singular: 'Dwie kolumny z tytułami', plural: 'Dwie kolumny z tytułami' },
  imageURL: '/api/media/file/twocolumns.png',
  fields: [
    {
      name: 'title',
      label: 'Tytuł',
      type: 'text',
    },
    {
      name: 'content',
      label: 'Kontent',
      type: 'richText',
      required: true,
    },
    {
      name: 'highlighted',
      label: 'Wyrózniony',
      type: 'checkbox',
    },
    {
      name: 'title2',
      label: 'Tytuł',
      type: 'text',
    },
    {
      name: 'content2',
      label: 'Kontent',
      type: 'richText',
      required: true,
    },
    {
      name: 'highlighted2',
      label: 'Wyrózniony',
      type: 'checkbox',
    },
  ],
}
