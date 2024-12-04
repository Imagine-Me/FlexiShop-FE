import { IIcon, IImageModel } from '../image.interface'

export interface IHeader {
  logo?: IImageModel
  title?: string
  name: 'watchHeader'
  wishListIcon: IIcon
  cartIcon: IIcon
}

export interface IHeaderProps extends IHeader {}
