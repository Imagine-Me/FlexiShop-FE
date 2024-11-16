import { Box, Grid, Typography } from '@mui/material'
import classes from './ProductTile.module.css'
import { useGrid } from 'src/hooks/grid.hook'
import { ProductCard1 } from 'src/components/productCard'
import { productList } from 'src/mock/product'
import { LinkButton } from 'src/components/linkButton/LinkButton'

export const ProductTile = () => {
  const cardCount = useGrid()

  const colCount = 12 / cardCount

  const products = productList.filter((_, index) => index < cardCount)

  return (
    <Box>
      <Box
        className={classes.titleSection}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h2">New Arrivals</Typography>
        <LinkButton to="">See All</LinkButton>
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
