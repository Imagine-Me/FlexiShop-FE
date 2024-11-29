import { StatusEnum } from './common.interface'
import { IImageModel } from './image.interface'

export interface IProductVariantModel {
  createdAt?: string
  updatedAt?: string
  id?: string
  name: string
  description: string
  price: number | null
  stock: number | null
}

export interface IProductModel {
  id: string
  name: string
  description: string
  price: number | null
  discountPrice?: number | null
  stock: number | null
  specification?: string
  images?: IImageModel[]
  status: StatusEnum
  variants?: IProductVariantModel[]
}

export interface IBrandModel {
  id?: string
  name: string
  logo?: IImageModel
  products?: IProductModel[]
}

export interface ICategoryModel {
  id?: string
  name: string
  products?: IProductModel[]
}
