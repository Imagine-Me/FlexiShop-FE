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

interface IBaseModel<T = AppConfigUrls.LIGHT_THEME> {
  id: string
  name: T
}

export interface ICustomThemeModel<T extends AppConfigUrls>
  extends IBaseModel<T> {
  data: IThemePalette
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

export interface ICustomGeneralModel extends IBaseModel<AppConfigUrls.GENERAL> {
  data: IGeneralConfigData
}

export type IConfigModel = [
  ICustomThemeModel<AppConfigUrls.LIGHT_THEME>,
  ICustomThemeModel<AppConfigUrls.DARK_THEME>,
  ICustomGeneralModel,
]
