import { StatusEnum } from './common.interface'
import { IImageModel } from './image.interface'

export interface IProductVariantModel {
  createdAt?: string
  updatedAt?: string
  id?: string
  name: string
  description: string
  price: number
  stock: number
}

export interface IProductModel {
  id: string
  name: string
  description: string
  price: number
  discountPrice?: number
  stock: number
  specification?: string
  images?: IImageModel[]
  status: StatusEnum
  variants?: IProductVariantModel[]
}
