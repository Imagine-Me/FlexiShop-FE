// interface

import { IIcon, IImageModel } from '../image.interface'
import { ILink } from './footer.interface'

export type Components = 'carousel1' | 'category1'

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

export type HomeComponents =
  | Component<Carousel1, 'carousel1'>
  | Component<Category1, 'category1'>
