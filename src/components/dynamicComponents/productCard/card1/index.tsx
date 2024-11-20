import { Card, CardActionArea, Typography } from '@mui/material'

import classes from './Card1.module.css'
import { IProductModel } from 'src/interfaces/components/home.interface'

export const ProductCard1: React.FC<IProductModel> = ({
  image,
  title,
  price,
}) => {
  return (
    <CardActionArea>
      <Card className={classes.card}>
        <div
          className={classes.imageSection}
          style={{ backgroundImage: `url(${image.url})` }}
        ></div>
        <div className={classes.contentSection}>
          <Typography variant="body1" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.price} color="success">
            ${price}
          </Typography>
        </div>
      </Card>
    </CardActionArea>
  )
}
