import { BoxProps, ButtonProps, TypographyProps } from '@mui/material'
import { IGenericComponent } from './generic.interface'

export type Animations = 'zoom-in-out' | 'zoom-out-in' | 'left-to-right'

export interface FullSizeBannerProps {
  images: string[]
  slideDuration: number
  contentMaxHeight?: number
  contentMinHeight: number
  falloutContentColor: string
  animation: Animations
  transitionDuration: number
  textContentMaxWidth: number
  textContentPadding: number
  textContentGap: number
  textContentVerticalAlign: BoxProps['justifyContent']
  textContentHorizontalAlign: BoxProps['justifyContent']
  backgroundImagePosition: string
  backgroundImageSize: string
  textContent: {
    heading: {
      text: string
      variant: TypographyProps['variant']
      style: TypographyProps['sx']
    }
    description: {
      text: string
      variant: TypographyProps['variant']
      style: TypographyProps['sx']
    }
    button: {
      text: string
      variant: ButtonProps['variant']
      style: ButtonProps['sx']
    }
  }
}

export interface IFullBannerProps {
  props: IGenericComponent<FullSizeBannerProps>
}
