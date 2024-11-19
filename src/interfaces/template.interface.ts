import { ThemeOptions } from '@mui/material'
import { IHeader } from './components/header.interface'

export interface ITemplateModel {
  id: string
  name: 'watch'
  theme: ThemeOptions
  header: IHeader
}

export type ITemplateStoreData = Omit<ITemplateModel, 'id' | 'name'>
