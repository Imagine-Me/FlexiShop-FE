import { Card, CardActionArea, Typography } from '@mui/material'

import classes from './Card1.module.css'

interface ProductCard1Props {
  image: string
  title: string
  price: number
  description: string
}

export const ProductCard1: React.FC<ProductCard1Props> = ({
  image,
  title,
  price,
}) => {
  return (
    <CardActionArea>
      <Card className={classes.card}>
        <div
          className={classes.imageSection}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className={classes.contentSection}>
          <Typography variant="body1" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.title} color="success">
            ${price}
          </Typography>
        </div>
      </Card>
    </CardActionArea>
  )
}
