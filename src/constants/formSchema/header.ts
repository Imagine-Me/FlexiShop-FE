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
]
