import { IIcon, IImageModel } from '../image.interface'

export interface IHeader {
  logo?: IImageModel
  title?: string
  name: 'watchHeader'
  wishListIcon: IIcon
  cartIcon: IIcon
}
