import { StatusEnum } from './common.interface'
import { IImageModel } from './image.interface'

export interface IProductVariantModel {
  createdAt?: string
  updatedAt?: string
  id?: string
  variant?: IVariantModel
  price: number | null
  stock: number | null
  images: IImageModel[] | null
  specifications: string
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
  isVariant: boolean 
  variants?: IProductVariantModel[]
}

export interface IProductSearchModel {
  name: string
  link: string
  image?: IImageModel
  default?: boolean
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

export interface ITagModel {
  id?: string
  name: string
}

export interface IVariantModel {
  id?: string
  name: string
  value: string
  html?: string
  productVariant?: IProductVariantModel[]
}
