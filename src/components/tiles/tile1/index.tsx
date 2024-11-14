import { Button, Card, Grid, Typography } from '@mui/material'

import classes from './tile1.module.css'

export interface Tile1Props {
  card1: {
    align: 'left' | 'right'
    title1: string
    title2: string
    footer: string
    image: string
  }
  card2: {
    align: 'left' | 'right'
    title1: string
    title2: string
    image: string
  }
  card3: {
    align: 'left' | 'right'
    title1: string
    title2: string
    image: string
  }
}

export const Tile1: React.FC<Tile1Props> = ({ card1, card2, card3 }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={5}>
        <Card
          className={classes.card1}
          style={{
            backgroundImage: `url(${card1.image})`,
            backgroundPosition: `bottom ${card1.align}`,
          }}
        >
          <div className={`${classes.card1Container} ${classes[card1.align]}`}>
            <Typography variant="h4">{card1.title1}</Typography>
            <Typography variant="h2">{card1.title2}</Typography>
            <Typography variant="h5">{card1.footer}</Typography>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={7}>
        <div className={classes.cardContainer}>
          <Card
            className={classes.card2}
            style={{
              backgroundImage: `url(${card2.image})`,
              backgroundPosition: `bottom ${card2.align}`,
            }}
          >
            <div
              className={`${classes.card2Container} ${classes[card2.align]}`}
            >
              <div>
                <Typography variant="h4">{card2.title1}</Typography>
                <Typography variant="h2">{card2.title2}</Typography>
                <Button variant="contained" size="large">
                  Shop Now
                </Button>
              </div>
            </div>
          </Card>
          <Card
            className={classes.card2}
            style={{
              backgroundImage: `url(${card3.image})`,
              backgroundPosition: `bottom ${card3.align}`,
            }}
          >
            <div
              className={`${classes.card2Container} ${classes[card3.align]}`}
            >
              <div>
                <Typography variant="h4">{card3.title1}</Typography>
                <Typography variant="h2">{card3.title2}</Typography>
                <Button variant="contained" size="large">
                  Shop Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Grid>
    </Grid>
  )
}
