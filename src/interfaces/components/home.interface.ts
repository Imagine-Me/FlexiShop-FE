// interface

import { CommonCardProps } from 'src/components/dynamicComponents/tiles/common/card'
import { IIcon, IImageModel } from '../image.interface'
import { ILink } from './footer.interface'
import { AlignmentEnum } from './common.interface'

export type Components = 'carousel1' | 'category1' | 'productTile' | 'tile1'

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

// Tile 1
export interface Tile1Props {
  card1: {
    image: IImageModel
    title1: string
    title2: string
    align: AlignmentEnum
    footer: string
  }
  card2: CommonCardProps
  card3: CommonCardProps
}

export type HomeComponents =
  | Component<Carousel1, 'carousel1'>
  | Component<Category1, 'category1'>
  | Component<ProductTile, 'productTile'>
  | Component<Tile1Props, 'tile1'>
