import { Button, Card, Typography } from '@mui/material'

import classes from './card.module.css'
import {
  AlignmentEnum,
  ColorEnum,
} from 'src/interfaces/components/common.interface'
import { IImageModel } from 'src/interfaces/image.interface'

export interface CommonCardProps {
  image: IImageModel
  title1: string
  title2: string
  align: AlignmentEnum
  buttonText?: string
  color?: ColorEnum
}

export const CommonCard: React.FC<CommonCardProps> = ({
  align,
  image,
  title1,
  title2,
  buttonText = 'Shop Now',
  color = 'primary',
}) => {
  return (
    <Card className={`${classes.card} ${classes[color]}`}>
      <div
        className={classes.backgroundImage}
        style={{
          backgroundImage: `url(${image?.url})`,
          backgroundPosition: `bottom ${align}`,
        }}
      ></div>
      <div className={`${classes.cardContainer} ${classes[align]}`}>
        <div>
          <Typography variant="h4" className={classes.title1}>
            {title1}
          </Typography>
          <Typography variant="h1" className={classes.title2}>
            {title2}
          </Typography>
          <Button variant="contained" size="large" className={classes.button}>
            {buttonText}
          </Button>
        </div>
      </div>
    </Card>
  )
}
