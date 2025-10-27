import type { Block } from 'payload'

export const QuizEncouragment: Block = {
  slug: 'QuizEncouragment',
  labels: { singular: 'Zachęta do quizu', plural: 'Zachęty do quizu' },
  imageURL: '/api/media/file/zacheta-quiz.png',

  fields: [
    {
      name: 'post',
      type: 'relationship',
      relationTo: 'quizzes',
      required: true,
    },
  ],
}
