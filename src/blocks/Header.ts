import type { Block } from 'payload'

export const Header: Block = {
  slug: 'Header',
  labels: { singular: 'Header', plural: 'Headery' },
  imageURL: '/api/media/file/header.png',
  fields: [
    {
      name: 'title',
      label: 'Tytuł',
      type: 'text',
      required: true,
    },
    {
      name: 'font',
      label: 'Czy duzy tytuł',
      type: 'checkbox',
    },
    {
      name: 'content',
      label: 'Kontent',
      type: 'text',
    },
  ],
}
