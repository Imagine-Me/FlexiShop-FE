import { Theme } from '@mui/material'

export const Component = (theme: Theme) => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '--mui-primary-color': theme.palette.primary.main,
        },
      },
    },
  }
}
