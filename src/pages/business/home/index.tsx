import React from 'react'
import { Carousel1 } from 'src/components/carousel'
import { Category1 } from 'src/components/category'
import { ProductTile, Tile1, Tile2 } from 'src/components/tiles'

import { mockCarousel1 } from 'src/mock/fullSizeBanner'

import classes from './home.module.css'
import { tile1MockData, tile2MockData } from 'src/mock/tile'

export const Home: React.FC = () => {
  return (
    <div className={classes.watchTemplate}>
      <div>
        <Carousel1 images={mockCarousel1} />
      </div>
      <div>
        <Category1 />
      </div>
      <div>
        <ProductTile />
      </div>
      <div>
        <Tile1 {...tile1MockData} />
      </div>
      <div>
        <Tile2 {...tile2MockData} />
      </div>
    </div>
  )
}
