import { Grid, TextField } from '@mui/material'
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
    field: 'checkbox',
    label: 'Is there variants for this product',
    name: 'isVariant',
    description: 'Does this product contain variants like color, size etc?',
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
              label="Variant Name"
              value={state.name}
              onChange={(e) => onChange('name', e.target.value)}
            />
            <TextField
              rows={3}
              sx={{ mb: 2 }}
              label="Description"
              name="description"
              value={state.description}
              onChange={(e) => onChange('description', e.target.value)}
            />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  type="number"
                  name="price"
                  label="Price"
                  value={state.price}
                  onChange={(e) => onChange('price', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  type="number"
                  name="stock"
                  label="Stock"
                  value={state.stock}
                  onChange={(e) => onChange('stock', e.target.value)}
                />
              </Grid>
            </Grid>
          </>
        )
      },
      multipleField: {
        titleKey: 'name',
        defaultData: productVariantData as any,
      },
    },
    shouldHide(formValue: any) {
      return !formValue.isVariant
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
      {
        field: 'numberField',
        label: 'Stock',
        name: 'stock',
        description: 'Enter the stock number',
      },
    ],
    shouldHide(formValue: any) {
      return formValue.isVariant
    },
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

export const brandSchema: IFormSchema[] = [
  {
    field: 'textfield',
    label: 'Brand Name',
    name: 'name',
    description: 'Enter the name of the brand',
  },
  {
    field: 'image',
    label: 'Brand Logo',
    name: 'logo',
    description: 'Logo of the product',
  },
]
