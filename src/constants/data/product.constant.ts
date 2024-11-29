import { StatusEnum } from 'src/interfaces/common.interface'
import {
  IProductModel,
  IProductVariantModel,
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
  description: '',
  name: '',
  price: null,
  stock: null,
}
