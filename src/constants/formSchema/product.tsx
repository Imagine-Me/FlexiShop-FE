import { Grid, TextField } from '@mui/material'
import { IFormSchema } from 'src/interfaces/formSchema.interface'
import { productVariantData } from '../data/product.constant'
import { ImageUploader } from 'src/components/generic/imageUploader/ImageUploader'
import { IProductVariantModel } from 'src/interfaces/product.interface'
import { HtmlEditor } from 'src/components/generic/HtmlEditor/HtmlEditor'
import { VariantFieldGroupBy } from 'src/components/form/fields/VariantField'

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
    label: 'Add Product Variants',
    name: 'variants',
    description: 'Add variants if exists',
    metadata: {
      component(
        state: IProductVariantModel,
        onChange: (key: keyof IProductVariantModel, value: any) => void
      ) {
        return (
          <>
            <VariantFieldGroupBy
              label="Variant"
              onChange={(value) => onChange('variant', value)}
              value={state.variant!}
              helperText="Select variants for this product"
            />
            <Grid container spacing={2} sx={{ mt: 1 }}>
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
            <ImageUploader
              multiple
              value={state.images ?? []}
              label="Image for this product"
              name="images"
              description="Add multiple images for this product"
              onChange={(value) => onChange('images', value)}
            />
            <HtmlEditor
              onChange={(value) => onChange('specifications', value)}
              value={state.specifications}
              label="Specifications"
            />
          </>
        )
      },
      multipleField: {
        insideKey: 'variant',
        titleKey: 'name - value',
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
        name: 'price',
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
    shouldHide(formValue: any) {
      return formValue.isVariant
    },
  },
  {
    field: 'htmlEditor',
    label: 'Specification',
    name: 'specifications',
    description: 'Enter the specification of the product',
    shouldHide(formValue: any) {
      return formValue.isVariant
    },
  },
  {
    field: 'flex-2',
    label: '',
    subSchema: [
      {
        field: 'brandField',
        label: 'Brand',
        name: 'brand',
        description: 'Select brand for this product',
      },
      {
        field: 'categoryField',
        label: 'Category',
        name: 'category',
        description: 'Select category for this product',
      },
      {
        field: 'tagField',
        label: 'Tags',
        name: 'tags',
        description: 'Select tags for this product',
      },
    ],
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

export const categorySchema: IFormSchema[] = [
  {
    field: 'textfield',
    label: 'Category Name',
    name: 'name',
    description: 'Enter the name of the category',
  },
]

export const tagSchema: IFormSchema[] = [
  {
    field: 'textfield',
    label: 'Tag Name',
    name: 'name',
    description: 'Enter the name of the tag',
  },
]

export const variantSchema: IFormSchema[] = [
  {
    field: 'variantField',
    label: 'Variant Name',
    name: 'name',
    description: 'Enter the name of the variant',
  },
  {
    field: 'textfield',
    label: 'Variant value',
    name: 'value',
    description: 'Enter the name of the variant',
  },
  {
    field: 'textarea',
    label: 'HTML',
    name: 'html',
    description:
      'How to show in the app. You can add an HTML code here which will show up in app.',
  },
]
