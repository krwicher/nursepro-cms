import type { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Quizzes: CollectionConfig = {
  slug: 'quizzes',
  access: { read: () => true, create: () => true, update: () => true, delete: () => true },
  labels: {
    singular: 'Quiz',
    plural: 'Quizy',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Nazwa quizu',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      unique: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      label: 'Kategoria',
      hasMany: false,
      required: true,
    },
    {
      name: 'questions',
      type: 'array',
      label: 'Pytania',
      minRows: 1,
      fields: [
        {
          name: 'questionText',
          type: 'text',
          label: 'Treść pytania',
          required: true,
        },
        {
          name: 'answers',
          type: 'array',
          label: 'Odpowiedzi',
          minRows: 2,
          fields: [
            {
              name: 'answerText',
              type: 'text',
              label: 'Treść odpowiedzi',
              required: true,
            },
            {
              name: 'isCorrect',
              type: 'checkbox',
              label: 'Poprawna odpowiedź',
              defaultValue: false,
            },
          ],
        },
      ],
    },
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
