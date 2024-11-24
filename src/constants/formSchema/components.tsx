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

export const getComponentSchema = (component: HomeComponents['name']) => {
  switch (component) {
    case 'carousel1':
      return carouselSchema
    case 'category1':
      return category1Schema
  }
}
