import Slider, { Settings } from 'react-slick'
import classes from './carousel1.module.css'
import { Carousel1 as Carousel1Props } from 'src/interfaces/components/home.interface'

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: classes.carouselDots,
  autoplay: true,
}

interface ICarousel1Props {
  data: Carousel1Props
}

export const Carousel1: React.FC<ICarousel1Props> = ({ data }) => {
  return (
    <div className={`${classes.carouselContainer} slider-container`}>
      <Slider {...settings}>
        {data.images.map((image, index) => (
          <img
            key={`banner_image_${index}`}
            src={image.url}
            alt={image.name}
            className={classes.image}
          />
        ))}
      </Slider>
    </div>
  )
}
