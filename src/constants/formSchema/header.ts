import { IFormSchema } from 'src/interfaces/formSchema.interface'

export const headerPageSchema: IFormSchema[] = [
  {
    name: 'logo',
    field: 'image',
    label: 'Logo',
    description: 'Logo image for the header',
    metadata: {
      multiple: false,
    },
  },
  {
    name: 'title',
    field: 'textfield',
    label: 'Title',
    description: 'Header title',
  },
  {
    name: '',
    field: 'flex-2',
    label: '',
    subSchema: [
      {
        name: 'cartIcon',
        field: 'icon',
        label: 'Cart Icon',
        description: 'Icon for cart',
      },
      {
        name: 'wishListIcon',
        field: 'icon',
        label: 'Wish list Icon',
        description: 'Icon for wish list',
      },
    ],
  },
]
