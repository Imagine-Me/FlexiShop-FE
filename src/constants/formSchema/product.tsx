import { TextField } from '@mui/material'
import { IFormSchema } from 'src/interfaces/formSchema.interface'
import { productVariantData } from '../data/product.constant'

export const productSchema: IFormSchema[] = [
  {
    field: 'textfield',
    label: 'Product Name',
    name: 'name',
    description: 'Enter the name of the product',
  },
  {
    field: 'textarea',
    label: 'Description',
    name: 'description',
    description: 'Enter the description of the product',
  },
  {
    field: 'multiple',
    label: 'Product Variant',
    name: 'variants',
    description: 'Add variants if exists',
    metadata: {
      component(state, onChange) {
        return (
          <>
            <TextField
              sx={{ mb: 2 }}
              name="name"
              value={state.name}
              onChange={(e) => onChange('name', e.target.value)}
            />
            <TextField
              rows={3}
              sx={{ mb: 2 }}
              name="description"
              value={state.description}
              onChange={(e) => onChange('description', e.target.value)}
            />
            <TextField
              type="number"
              sx={{ mb: 2 }}
              name="price"
              value={state.price}
              onChange={(e) => onChange('price', e.target.value)}
            />
            <TextField
              type="number"
              sx={{ mb: 2 }}
              name="stock"
              value={state.stock}
              onChange={(e) => onChange('stock', e.target.value)}
            />
          </>
        )
      },
      multipleField: {
        titleKey: 'name',
        defaultData: productVariantData as any,
      },
    },
  },
  {
    field: 'flex-2',
    label: '',
    subSchema: [
      {
        field: 'numberField',
        label: 'Price',
        name: 'description',
        description: 'Enter the price of the product',
      },
      {
        field: 'numberField',
        label: 'Discount Price',
        name: 'discountPrice',
        description: 'Enter the discount price of the product',
      },
    ],
  },
  {
    field: 'numberField',
    label: 'Stock',
    name: 'stock',
    description: 'Enter the stock number',
  },
  {
    field: 'image',
    label: 'Images',
    name: 'images',
    description: 'Upload the image of the product',
    metadata: {
      multiple: true,
    },
  },
  {
    field: 'htmlEditor',
    label: 'Specification',
    name: 'specification',
    description: 'Enter the specification of the product',
  },
]
