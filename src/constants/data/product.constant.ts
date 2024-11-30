import { StatusEnum } from 'src/interfaces/common.interface'
import {
  IBrandModel,
  ICategoryModel,
  IProductModel,
  IProductVariantModel,
  ITagModel,
  IVariantModel,
} from 'src/interfaces/product.interface'

export const productData: Partial<IProductModel & { isVariant: boolean }> = {
  description: '',
  name: '',
  price: null,
  status: StatusEnum.ACTIVE,
  stock: null,
  discountPrice: undefined,
  specification: '',
  isVariant: false,
}

export const productVariantData: IProductVariantModel = {
  price: null,
  stock: null,
  images: [],
  specifications: '',
}

export const brandData: IBrandModel = {
  name: '',
}

export const categoryData: ICategoryModel = {
  name: '',
}

export const tagData: ITagModel = {
  name: '',
}

export const variantData: IVariantModel = {
  name: '',
  value: '',
  html: '',
}
