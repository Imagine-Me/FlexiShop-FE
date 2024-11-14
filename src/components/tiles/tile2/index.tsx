import { Grid } from '@mui/material'

import { CommonCard, CommonCardProps } from '../common/card'

export interface Tile2Props {
  card1: CommonCardProps
  card2: CommonCardProps
}

export const Tile2: React.FC<Tile2Props> = ({ card1, card2 }) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <CommonCard {...card1} />
      </Grid>
      <Grid item xs={12} md={6}>
        <CommonCard {...card2} />
      </Grid>
    </Grid>
  )
}
