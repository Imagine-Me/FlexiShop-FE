import React from 'react'
import { Carousel1 } from 'src/components/carousel'
import { Category1 } from 'src/components/category'
import { ProductTile } from 'src/components/tiles'

import { mockCarousel1 } from 'src/mock/fullSizeBanner'

import classes from './home.module.css'

export const Home: React.FC = () => {
  return (
    <div className={classes.watchTemplate}>
      <Carousel1 images={mockCarousel1} />
      <Category1 />
      <ProductTile />
    </div>
  )
}
