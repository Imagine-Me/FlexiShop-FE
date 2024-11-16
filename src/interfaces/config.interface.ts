import { Palette } from '@mui/material'
import { AppConfigUrls } from 'src/constants/urls.constant'
import { IImageModel } from './image.interface'

export interface IThemePalette
  extends Omit<
    Palette,
    'getContrastText' | 'augmentColor' | 'mode' | 'contrastThreshold'
  > {
  mode?: Palette['mode']
  contrastThreshold?: number
}

interface IBaseModel<T = AppConfigUrls.THEME> {
  id: string
  name: T
}

export interface ICustomConfigModel<T, E> extends IBaseModel<T> {
  data: E
}

export interface IGeneralConfigData {
  title: string
  icon: IImageModel
  description: string
  keywords: string
  author: string
  ['og:title']: string
  ['og:description']: string
  ['og:image']: string
  ['twitter:card']: string
  ['twitter:title']: string
  ['twitter:description']: string
  ['twitter:image']: string
}

export interface IThemeConfigData {
  name: string
}

export type IConfigModel = [
  ICustomConfigModel<'general', IGeneralConfigData>,
  ICustomConfigModel<'theme', IThemeConfigData>,
]
