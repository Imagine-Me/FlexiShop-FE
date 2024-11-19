import { IIcon, IImageModel } from '../image.interface'

interface IIconLinks {
  name: string
  url: string
  icon: IIcon
}

interface ILinkMenu {
  title: string
  links: {
    title: string
    url: string
  }[]
}

export interface IFooter {
  name: 'watchFooter'
  logo: IImageModel
  socialMedia: IIconLinks[]
  copyright: string
  linkMenu: ILinkMenu[]
}
