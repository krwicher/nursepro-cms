import { AddToFavoritesButton } from '@/blocks/AddToFavoritesButton'
import { Attachments } from '@/blocks/Attachments'
import { Header } from '@/blocks/Header'
import { ImagesSlider } from '@/blocks/ImagesSlider'
import { QuizEncouragment } from '@/blocks/QuizEncouragment'
import { References } from '@/blocks/References'
import { RelatedPosts } from '@/blocks/RelatedPosts'
import { Tabs } from '@/blocks/Tabs'
import { DropdownList } from '@/blocks/DropdownList'
import { RichText } from '@/blocks/RichText'

import { TwoColumnsWithTtitles } from '@/blocks/TwoColumnsWithTtitles'

import { HeaderBlock } from '@/blocks/HeaderBlock'

import type { CollectionConfig } from 'payload'
import slugify from 'slugify'

const LegalPosts: CollectionConfig = {
  slug: 'legal-posts',
  labels: { singular: 'Prawny artykuł', plural: 'Prawne artykuły' },
  admin: { useAsTitle: 'title' },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    { name: 'title', label: 'Tytuł', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      unique: true,
      admin: {
        readOnly: true,
      },
    },
    { name: 'subtitle', label: 'Podtytuł', type: 'text' },
    { name: 'estimation', label: 'Czas', type: 'text' },
    { name: 'zajawka', label: 'Zajawka', type: 'textarea' },

    {
      name: 'zdjecie',
      label: 'Zdjęcia główne',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      label: 'Treść artykułu',
      type: 'blocks',
      required: true,
      blocks: [
        HeaderBlock,
        Header,
        AddToFavoritesButton,
        Attachments,
        ImagesSlider,
        QuizEncouragment,
        References,
        RelatedPosts,
        Tabs,
        DropdownList,
        RichText,
        TwoColumnsWithTtitles,
      ],
    },
    {
      name: 'category',
      label: 'Powiązana kategoria',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false,
    },
    { name: 'published', label: 'Opublikowany', type: 'checkbox' },
  ],
  hooks: {
    beforeChange: [
      async ({ data, operation }) => {
        if (data?.title) {
          data.slug = slugify(data.title, {
            lower: true,
            strict: true,
            locale: 'pl',
          })
        }
        if (!data?.slug && data?.name) {
          data.slug = slugify(data.name, {
            lower: true,
            strict: true,
            locale: 'pl',
          })
        }
        return data
      },
    ],
  },
}

export default LegalPosts
