import { Card, CardActionArea, Typography } from '@mui/material'

import classes from './Card1.module.css'
import { IProductModel } from 'src/interfaces/product.interface'

export const ProductCard1: React.FC<IProductModel> = ({
  images,
  name,
  price,
}) => {
  return (
    <CardActionArea>
      <Card className={classes.card}>
        <div
          className={classes.imageSection}
          style={{ backgroundImage: `url(${images?.[0]?.url})` }}
        ></div>
        <div className={classes.contentSection}>
          <Typography variant="body1" className={classes.title}>
            {name}
          </Typography>
          <Typography variant="body1" className={classes.price} color="success">
            ${price}
          </Typography>
        </div>
      </Card>
    </CardActionArea>
  )
}
