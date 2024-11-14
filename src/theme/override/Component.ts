import { Theme } from '@mui/material'

export const Component = (theme: Theme) => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '--mui-primary-color': theme.palette.primary.main,
          '--mui-primary-dark-color': theme.palette.primary.dark,
          '--mui-primary-light-color': theme.palette.primary.light,
          '--mui-secondary-light-color': theme.palette.secondary.light,
          '--mui-paper-color': theme.palette.background.paper,
          '--mui-grey-color': theme.palette.grey[100],
        },
      },
    },
  }
}
