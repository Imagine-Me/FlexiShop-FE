import React from 'react'
import { Carousel1 } from 'src/components/carousel'
import { Category1 } from 'src/components/category'
import { ProductTile, Tile1, Tile2 } from 'src/components/tiles'

import { mockCarousel1 } from 'src/mock/fullSizeBanner'

import classes from './home.module.css'
import { tile1MockData, tile2MockData } from 'src/mock/tile'
import { Contact1 } from 'src/components/contact'
import { mockContact } from 'src/mock/contact'

export const Home: React.FC = () => {
  return (
    <div className={classes.watchTemplate}>
      <div className={classes.componentContainer}>
        <Carousel1 images={mockCarousel1} />
      </div>
      <div className={classes.componentContainer}>
        <Category1 />
      </div>
      <div className={classes.componentContainer}>
        <ProductTile />
      </div>
      <div className={classes.componentContainer}>
        <Tile1 {...tile1MockData} />
      </div>
      <div className={classes.componentContainer}>
        <Tile2 {...tile2MockData} />
      </div>
      <div>
        <Contact1 {...mockContact} />
      </div>
    </div>
  )
}
