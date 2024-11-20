import { Grid } from '@mui/material'

import { CommonCard } from '../common/card'
import { Tile2Props } from 'src/interfaces/components/home.interface'

interface ITile2Props {
  data: Tile2Props
}

export const Tile2: React.FC<ITile2Props> = ({ data }) => {
  const { card1, card2 } = data
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
