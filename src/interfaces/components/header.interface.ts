import { IIcon } from '../image.interface'

export interface IHeader {
  logo?: string
  title?: string
  name: 'watchHeader'
  wishListIcon: IIcon
  cartIcon: IIcon
}
