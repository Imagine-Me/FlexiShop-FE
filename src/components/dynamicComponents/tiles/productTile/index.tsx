import { Box, Grid, Typography } from '@mui/material'
import classes from './ProductTile.module.css'
import { useGrid } from 'src/hooks/grid.hook'
import { ProductCard1 } from 'src/components/dynamicComponents/productCard'
import { LinkButton } from 'src/components/generic/linkButton/LinkButton'
import { ProductTile as ProductTileProps } from 'src/interfaces/components/home.interface'

interface IProductTileProps {
  data: ProductTileProps
}

export const ProductTile: React.FC<IProductTileProps> = ({ data }) => {
  const cardCount = useGrid()

  const colCount = 12 / cardCount

  const products = data.products.filter((_, index) => index < cardCount)

  return (
    <Box>
      <Box
        className={classes.titleSection}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h2">{data.title}</Typography>
        <LinkButton to={data.link.url}>{data.link.title}</LinkButton>
      </Box>
      <Grid container spacing={4}>
        {products.map((card) => (
          <Grid key={card.name} item xs={colCount}>
            <ProductCard1 {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
