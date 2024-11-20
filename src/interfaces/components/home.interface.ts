// interface

import { IIcon, IImageModel } from '../image.interface'
import { ILink } from './footer.interface'

export type Components = 'carousel1' | 'category1' | 'productTile'

// TODO: remove once product page implemented
export interface IProductModel {
  title: string
  image: IImageModel
  price: number
  rating: number
  description: string
}

interface Component<T, E extends Components> {
  name: E
  data: T
}

// Carousel 1
export type Carousel1 = Array<IImageModel>

// Category 1
export interface Category1 {
  title: string
  categories: {
    icon: IIcon
    category: string
  }[]
  link: ILink
}

// Product Tile
export interface ProductTile {
  products: IProductModel[]
  title: string
  link: ILink
}

export type HomeComponents =
  | Component<Carousel1, 'carousel1'>
  | Component<Category1, 'category1'>
  | Component<ProductTile, 'productTile'>
