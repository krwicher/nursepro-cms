import type { CollectionConfig } from 'payload'

export const Messages: CollectionConfig = {
  slug: 'messages',
  labels: {
    singular: 'Wiadomość',
    plural: 'Wiadmości',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'message', type: 'textarea', required: true },
  ],
  access: {
    read: ({ req }) => {
      if (req?.user) return true
      return req.headers.get('x-internal-token') === process.env.PAYLOAD_API_KEY
      return false
    },
    create: ({ req }) => {
      if (req?.user) return true
      return req.headers.get('x-internal-token') === process.env.PAYLOAD_API_KEY
      return false
    },
  },
}
