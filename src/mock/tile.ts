import { Tile1Props } from 'src/components/tiles/tile1'
import { Tile2Props } from 'src/components/tiles/tile2'

export const tile1MockData: Tile1Props = {
  card1: {
    align: 'right',
    title1: 'Watches',
    title2: 'Your style delivered. Exclusively Online.',
    footer: 'www.site.com',
    image: 'http://localhost:3000/static/91109a85-1e48-47e2-a5b5-d314181a2f97',
  },
  card2: {
    align: 'left',
    title1: 'Timeless elegance',
    title2: 'Discover our accessories collection',
    image: 'http://localhost:3000/static/2850f52d-bb17-4a91-b435-e0e2f464257a',
    color: 'grey',
  },
  card3: {
    align: 'right',
    title1: 'Find your perfect watch',
    title2: 'Explore our latest collection',
    image: 'http://localhost:3000/static/7c1939bd-e648-4960-9931-c46c658ca800',
    color: 'grey',
  },
}

export const tile2MockData: Tile2Props = {
  card1: {
    align: 'left',
    title1: 'Timeless elegance',
    title2: 'Discover our accessories collection',
    image: 'http://localhost:3000/static/2850f52d-bb17-4a91-b435-e0e2f464257a',
    color: 'primary',
  },
  card2: {
    align: 'right',
    title1: 'Find your perfect watch',
    title2: 'Explore our latest collection',
    image: 'http://localhost:3000/static/7c1939bd-e648-4960-9931-c46c658ca800',
    color: 'secondary',
  },
}
