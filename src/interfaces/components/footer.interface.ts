import { IIcon, IImageModel } from '../image.interface'

export interface IIconLinks {
  title: string
  url: string
  icon: IIcon
}

export interface ILink {
  title: string
  url: string
}

export interface ILinkMenu {
  title: string
  links: ILink[]
}

export interface IFooter {
  name: 'watchFooter'
  logo: IImageModel
  socialMedia: IIconLinks[]
  copyright: string
  linkMenu: ILinkMenu[]
}
