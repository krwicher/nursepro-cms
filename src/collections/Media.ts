import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: ({ req }) => {
      if (req?.user) return true
      return req.headers.get('x-internal-token') === process.env.PAYLOAD_API_KEY
    },
    create: ({ req }) => {
      if (req?.user) return true
      return req.headers.get('x-internal-token') === process.env.PAYLOAD_API_KEY
    },
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
