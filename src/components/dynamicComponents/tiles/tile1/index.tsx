import { Card, Grid, Typography } from '@mui/material'

import classes from './tile1.module.css'
import { CommonCard, CommonCardProps } from '../common/card'

export interface Tile1Props {
  card1: {
    align: 'left' | 'right'
    title1: string
    title2: string
    footer: string
    image: string
  }
  card2: CommonCardProps
  card3: CommonCardProps
}

export const Tile1: React.FC<Tile1Props> = ({ card1, card2, card3 }) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} lg={5}>
        <Card className={classes.card1}>
          <div
            className={classes.backgroundImage}
            style={{
              backgroundImage: `url(${card1.image})`,
              backgroundPosition: `bottom ${card1.align}`,
            }}
          ></div>
          <div className={`${classes.card1Container} ${classes[card1.align]}`}>
            <Typography variant="h4">{card1.title1}</Typography>
            <Typography variant="h2" className={classes.title2}>
              {card1.title2}
            </Typography>
            <Typography variant="h5">{card1.footer}</Typography>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={7}>
        <div className={classes.cardContainer}>
          <CommonCard {...card2} />
          <CommonCard {...card3} />
        </div>
      </Grid>
    </Grid>
  )
}
