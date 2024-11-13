import { useMediaQuery, useTheme } from '@mui/material'

export const useGrid = () => {
  const theme = useTheme()
  const sx = useMediaQuery(theme.breakpoints.down('sm'))
  const sm = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const md = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  const lg = useMediaQuery(theme.breakpoints.between('lg', 'xl'))
  const xl = useMediaQuery(theme.breakpoints.up('xl'))
  if (sx) {
    return 1
  }
  if (sm) {
    return 2
  }
  if (md) {
    return 3
  }
  if (lg) {
    return 4
  }
  if (xl) {
    return 6
  }
  return 6
}
