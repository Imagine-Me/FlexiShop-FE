/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from 'react'
import { CssBaseline } from '@mui/material'
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
  ThemeOptions,
} from '@mui/material/styles'
import useConfigService from 'src/service/business/config.service'
import typography from './typography'
import GlobalStyles from './globalStyles'
import ComponentsOverrides from './override'
import { useConfigStore } from 'src/store/business/config.store'

import { palette } from './palette'

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { getConfigs } = useConfigService()
  const { appTheme } = useConfigStore()

  useEffect(() => {
    getConfigs()
  }, [])

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: appTheme || palette,
      spacing: 4,
      typography: typography,
    }),
    [appTheme]
  )

  const theme = createTheme(themeOptions)
  theme.components = ComponentsOverrides(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
