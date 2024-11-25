// interface

import { CommonCardProps } from 'src/components/dynamicComponents/tiles/common/card'
import { IIcon, IImageModel } from '../image.interface'
import { ILink } from './footer.interface'
import { AlignmentEnum, Contacts } from './common.interface'

export type Components =
  | 'carousel1'
  | 'category1'
  | 'productTile'
  | 'tile1'
  | 'tile2'
  | 'contact1'

// TODO: remove once product page implemented
export interface IProductModel {
  title: string
  image: IImageModel
  price: number
  rating: number
  description: string
  link?: ILink
}

interface Component<T, E extends Components> {
  name: E
  data: T
  styles?: React.CSSProperties
  className?: string
  id?: string // for indexing in FE
  description: string
}

// Carousel 1
export interface Carousel1 {
  images: Array<IImageModel>
}

// Category 1
export interface Category1 {
  title: string
  categories: {
    icon: IIcon
    category: string
    link: ILink
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

// Tile 2
export interface Tile2Props {
  card1: CommonCardProps
  card2: CommonCardProps
}

// Contact 1
export interface Contact1Props {
  title1: string
  title2: string
  contacts: Contacts[]
}

export type HomeComponents =
  | Component<Carousel1, 'carousel1'>
  | Component<Category1, 'category1'>
  | Component<ProductTile, 'productTile'>
  | Component<Tile1Props, 'tile1'>
  | Component<Tile2Props, 'tile2'>
  | Component<Contact1Props, 'contact1'>
