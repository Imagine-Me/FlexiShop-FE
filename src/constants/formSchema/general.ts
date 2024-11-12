import { IFormSchema } from 'src/interfaces/formSchema.interface'

export const generalPageSchema: IFormSchema[] = [
  {
    name: 'title',
    label: 'Title',
    field: 'textfield',
    description:
      'Defines the title of the webpage, which appears in the browser tab and is important for SEO.',
  },
  {
    name: 'icon',
    label: 'Favicon',
    field: 'image',
    metadata: {
      multiple: false,
    },
    description: 'Favicon, the small icon that appears in the browser tab.',
  },
  {
    label: 'Meta Tags for SEO',
    field: 'h5',
  },
  {
    label: 'Provide search engines with information about the page.',
    field: 'p',
  },
  {
    label: 'Description',
    name: 'description',
    field: 'textarea',
    description: "A brief description of the page's content",
  },
  {
    label: 'Keywords',
    name: 'keywords',
    field: 'textfield',
    description: 'Comma separated list of keywords',
  },
  {
    label: 'Author',
    name: 'author',
    field: 'textfield',
    description: 'Your name',
  },
  {
    label: 'Open Graph Tags',
    field: 'h5',
  },
  {
    label:
      'Used for social media sharing, ensuring the content displays correctly on platforms like Facebook, Twitter, etc.',
    field: 'p',
  },
  {
    label: 'Title',
    name: 'og:title',
    field: 'textfield',
    description: 'Your Page Title',
  },
  {
    label: 'Description',
    name: 'og:description',
    field: 'textarea',
    description: 'A brief description of the page',
  },
  {
    label: 'Image',
    name: 'og:image',
    field: 'image',
    metadata: {
      multiple: false,
    },
    description: 'Image url',
  },
  {
    label: 'Twitter Cards',
    field: 'h5',
  },
  {
    label:
      'Used for social media sharing, ensuring the content displays correctly on platforms like Facebook, Twitter, etc.',
    field: 'p',
  },
  {
    label: 'Card',
    name: 'twitter:card',
    field: 'textfield',
    description: 'Summary',
  },
  {
    label: 'Title',
    name: 'twitter:title',
    field: 'textfield',
    description: 'Your Page Title',
  },
  {
    label: 'Description',
    name: 'twitter:description',
    field: 'textarea',
    description: 'A brief description of the page',
  },
  {
    label: 'Image',
    name: 'twitter:image',
    field: 'image',
    metadata: {
      multiple: false,
    },
    description: 'Image url',
  },
]
