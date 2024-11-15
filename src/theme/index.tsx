/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from 'react'
import { CssBaseline } from '@mui/material'
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles'
import useConfigService from 'src/service/config.service'
import GlobalStyles from './globalStyles'
import { useConfigStore } from 'src/store/config.store'
import { Component } from './override/Component'

import { useTemplateStore } from 'src/store/template.store'
import useTemplateService from 'src/service/template.service'

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { getConfigs } = useConfigService()
  const { getTemplate } = useTemplateService()
  const { theme } = useTemplateStore()

  const { theme: currentTheme } = useConfigStore()

  useEffect(() => {
    getConfigs()
  }, [])

  // TODO: fetch theme based on version
  useEffect(() => {
    if (currentTheme?.name) {
      getTemplate(currentTheme.name)
    }
  }, [currentTheme])

  const appTheme = useMemo(() => {
    if (!theme) {
      return createTheme()
    }
    const updatedTheme = createTheme(theme)
    updatedTheme.components = {
      ...updatedTheme.components,
      ...Component(updatedTheme),
    }
    return updatedTheme
  }, [theme])

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={appTheme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
