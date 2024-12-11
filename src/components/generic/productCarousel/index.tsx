import ReactImageMagnify from 'react-image-magnify'
import { IImageModel } from 'src/interfaces/image.interface'

import classes from './productCarousel.module.css'
import Slider, { Settings } from 'react-slick'
import { useState } from 'react'
import { Card, IconButton, useTheme } from '@mui/material'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined'
import NavigateBeforeOutlined from '@mui/icons-material/NavigateBeforeOutlined'

interface IProductModelProps {
  images: IImageModel[]
}

const CustomPrevArrow = (props: any) => {
  const { className, onClick } = props
  return (
    <IconButton
      onClick={onClick}
      className={`${className} ${classes.slickButton}`}
    >
      <NavigateBeforeOutlined />
    </IconButton>
  )
}

const CustomNextArrow = (props: any) => {
  const { className, onClick } = props
  return (
    <IconButton
      onClick={onClick}
      className={`${className} ${classes.slickButton}`}
    >
      <NavigateNextOutlinedIcon />
    </IconButton>
  )
}

export const ProductCarousel: React.FC<IProductModelProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0)

  const theme = useTheme()

  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 7,
    slidesToScroll: 7,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    className: classes.slick,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div>
      <ReactImageMagnify
        className={classes.magnifyImage}
        {...{
          smallImage: {
            alt: images[selectedImage]?.name,
            isFluidWidth: true,
            src: images[selectedImage]?.url,
          },
          largeImage: {
            src: images[selectedImage]?.url,
            width: 1200,
            height: 1800,
          },
        }}
      />
      <div className={classes.sliderContainer}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <Card
              key={`product_image_${index}`}
              className={`${classes.carouselImageContainer} ${index === selectedImage ? classes.active : ''}`}
              role="button"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.name}
                className={classes.carouselImage}
              />
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  )
}
