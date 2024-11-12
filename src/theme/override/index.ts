import { Theme } from '@mui/material/styles'
import { Button } from './Button'
import { Input } from './Input'

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(Input(theme), Button(theme))
}
