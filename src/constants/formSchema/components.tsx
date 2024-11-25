import { HomeComponents } from 'src/interfaces/components/home.interface'
import { IFormSchema } from 'src/interfaces/formSchema.interface'

// Carousel 1
const carouselSchema: IFormSchema[] = [
  {
    name: 'images',
    label: 'Carousel Images',
    field: 'image',
    description: 'Images for the carousel',
    metadata: {
      multiple: true,
    },
  },
]

// Category 1
const category1Schema: IFormSchema[] = [
  {
    name: 'title',
    field: 'textfield',
    label: 'Header',
  },
  {
    name: 'link',
    field: 'link',
    label: 'Link to the category',
  },
  {
    name: 'categories',
    label: 'Categories',
    field: 'multiple-category1-form',
    description: 'Categories for the category component',
  },
]

// Product Tile 1
const productTileSchema: IFormSchema[] = [
  {
    name: 'title',
    field: 'textfield',
    label: 'Title',
    description: 'Title for the products',
  },
]

// Tile 1
const tile1Schema: IFormSchema[] = [
  {
    name: 'card1',
    label: 'Card 1',
    field: 'card',
    metadata: {
      schema: [
        {
          field: 'textfield',
          label: 'Title 1',
          name: 'card1.title1',
        },
        {
          field: 'textfield',
          label: 'Title 2',
          name: 'card1.title2',
        },
        {
          field: 'textfield',
          label: 'Footer',
          name: 'card1.footer',
        },
        {
          field: 'image',
          label: 'Card background image',
          name: 'card1.image',
        },
        {
          field: 'alignField',
          label: 'Card Alignment',
          name: 'card1.align',
        },
      ],
    },
  },
  {
    name: 'card2',
    label: 'Card 2',
    field: 'card',
    metadata: {
      schema: [
        {
          field: 'textfield',
          label: 'Title 1',
          name: 'card2.title1',
        },
        {
          field: 'textfield',
          label: 'Title 2',
          name: 'card2.title2',
        },
        {
          field: 'image',
          label: 'Card background image',
          name: 'card2.image',
        },
        {
          field: 'alignField',
          label: 'Card Alignment',
          name: 'card2.align',
        },
        {
          field: 'colorField',
          label: 'Card background color',
          name: 'card2.color',
        },
        {
          field: 'textfield',
          label: 'Button text',
          name: 'card2.buttonText',
        },
      ],
    },
  },

  {
    name: 'card3',
    label: 'Card 3',
    field: 'card',
    metadata: {
      schema: [
        {
          field: 'textfield',
          label: 'Title 1',
          name: 'card3.title1',
        },
        {
          field: 'textfield',
          label: 'Title 2',
          name: 'card3.title2',
        },
        {
          field: 'image',
          label: 'Card background image',
          name: 'card3.image',
        },
        {
          field: 'alignField',
          label: 'Card Alignment',
          name: 'card3.align',
        },
        {
          field: 'colorField',
          label: 'Card background color',
          name: 'card3.color',
        },
        {
          field: 'textfield',
          label: 'Button text',
          name: 'card3.buttonText',
        },
      ],
    },
  },
]

export const getComponentSchema = (component: HomeComponents['name']) => {
  switch (component) {
    case 'carousel1':
      return carouselSchema
    case 'category1':
      return category1Schema
    case 'productTile':
      return productTileSchema

    case 'tile1':
      return tile1Schema
    default:
  }
}
