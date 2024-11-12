import { FullSizeBannerProps } from 'src/interfaces/components/fullSizeBanner.interface'
import { IGenericComponent } from 'src/interfaces/components/generic.interface'

const images = [
  'https://www.pngall.com/wp-content/uploads/15/iWatch-Transparent.png',
  'https://pngfre.com/wp-content/uploads/Watche9-745x1024.png',
  'https://parspng.com/wp-content/uploads/2023/06/watchpng.parspng.com-10.png',
]

export const mockFullBannerData: IGenericComponent<FullSizeBannerProps> = {
  desktop: {
    images,
    textContent: {
      button: {
        text: 'Shop now',
        style: {},
        variant: 'contained',
      },
      description: {
        text: "Experience the world's finest watches",
        style: { color: 'white' },
        variant: 'h4',
      },
      heading: {
        text: 'Classics in color',
        style: { color: 'white' },
        variant: 'h1',
      },
    },
    slideDuration: 5,
    contentMinHeight: 200,
    falloutContentColor: 'black',
    animation: 'zoom-out-in',
    textContentMaxWidth: 640,
    textContentVerticalAlign: 'center',
    textContentHorizontalAlign: 'start',
    textContentGap: 9,
    textContentPadding: 5,
    transitionDuration: 1,
    backgroundImagePosition: 'center right',
    backgroundImageSize: 'auto',
  },
  mobile: {
    backgroundImagePosition: 'center',
    backgroundImageSize: 'cover',
  },
}
