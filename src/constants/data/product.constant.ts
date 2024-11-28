import { StatusEnum } from 'src/interfaces/common.interface'
import {
  IProductModel,
  IProductVariantModel,
} from 'src/interfaces/product.interface'

export const productData: Partial<IProductModel> = {
  description: '',
  name: '',
  price: 0,
  status: StatusEnum.ACTIVE,
  stock: 0,
  discountPrice: undefined,
  specification: '',
}

export const productVariantData: IProductVariantModel = {
  description: '',
  name: '',
  price: 0,
  stock: 0,
}
