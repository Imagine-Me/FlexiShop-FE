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
          '--mui-success-color': theme.palette.success.main,
          '--mui-primary-contrast-text': theme.palette.primary.contrastText,
          '--mui-secondary-contrast-text': theme.palette.secondary.contrastText,
          '--mui-common-white': theme.palette.common.white,
          '--mui-common-black': theme.palette.common.black,
        },
      },
    },
  }
}
