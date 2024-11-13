import { Box, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import classes from './ProductTile.module.css'
import { useGrid } from 'src/hooks/grid.hook'
import { ProductCard1 } from 'src/components/productCard'
import { productList } from 'src/mock/product'

export const ProductTile = () => {
  const cardCount = useGrid()

  const colCount = 12 / cardCount

  const products = productList.filter((_, index) => index < cardCount)

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">New Arrivals</Typography>
        <Typography>
          <Link className={classes.link} to="">
            See All
          </Link>
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {products.map((card) => (
          <Grid key={card.title} item xs={colCount}>
            <ProductCard1 {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
