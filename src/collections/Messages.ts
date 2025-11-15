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
    create: () => true,
    read: () => true,
  },
}
