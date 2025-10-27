import type { Block } from 'payload'

export const AddToFavoritesButton: Block = {
  slug: 'AddToFavorites',
  fields: [
    {
      name: 'post',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
  ],
}
