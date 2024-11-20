import { IFormSchema } from 'src/interfaces/formSchema.interface'

export const footerPageSchema: IFormSchema[] = [
  {
    name: 'logo',
    label: 'Logo',
    field: 'image',
    description: 'Footer logo',
  },
  {
    name: 'linkMenu',
    label: 'Footer Links',
    field: 'multiple-menu-links',
    description: 'Links to show on the footer',
  },
  {
    name: 'copyright',
    label: 'Copyright',
    field: 'textfield',
    description: 'Copyright text',
  },
  {
    name: 'socialMedia',
    label: 'Social Media',
    field: 'social-media-links',
    description: 'Social Media Links',
  },
]
