// interface

import { IImageModel } from '../image.interface'

export type Components = 'carousel1'

interface Component<T, E extends Components> {
  name: E
  data: T
}

// Carousel 1
export type Carousel1 = Array<IImageModel>

export type HomeComponents = Component<Carousel1, 'carousel1'>
