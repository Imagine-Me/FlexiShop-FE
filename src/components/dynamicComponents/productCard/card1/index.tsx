import { Card, CardActionArea, Typography } from '@mui/material'

import classes from './Card1.module.css'
import { IProductModel } from 'src/interfaces/product.interface'
import { Link } from 'react-router-dom'

export const ProductCard1: React.FC<IProductModel> = ({
  id,
  images,
  name,
  price,
  variants,
  isVariant,
}) => {
  const image = isVariant ? variants?.[0]?.images?.[0] : images?.[0]
  const productPrice = isVariant ? variants?.[0].price : price
  return (
    <CardActionArea>
      <Link to={`/product/${id}`}>
        <Card className={classes.card}>
          <img
            src={image?.url}
            className={classes.imageSection}
            alt={image?.name}
          />
          <div className={classes.contentSection}>
            <Typography variant="body1" className={classes.title}>
              {name}
            </Typography>
            <Typography
              variant="body1"
              className={classes.price}
              color="success"
            >
              ${productPrice}
            </Typography>
          </div>
        </Card>
      </Link>
    </CardActionArea>
  )
}
