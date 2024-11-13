import Slider, { Settings } from 'react-slick'
import classes from './carousel1.module.css'

interface Carousel1Props {
  images: string[]
}

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: classes.carouselDots,
  autoplay: true,
}

export const Carousel1: React.FC<Carousel1Props> = ({ images }) => {
  return (
    <div className={`${classes.carouselContainer} slider-container`}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <img
            key={`banner_image_${index}`}
            src={image}
            alt={`banner_image_${index}`}
            className={classes.image}
          />
        ))}
      </Slider>
    </div>
  )
}
