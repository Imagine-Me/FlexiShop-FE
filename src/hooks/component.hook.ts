import { useMediaQuery, useTheme } from '@mui/material'
import { IGenericComponent } from 'src/interfaces/components/generic.interface'

export const useComponentStyle = <T>(style: IGenericComponent<T>) => {
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  if (isDesktop) {
    return style.desktop
  } else if (isTablet) {
    return { ...style.desktop, ...(style.tab ?? {}) }
  } else {
    return { ...style.desktop, ...(style.mobile ?? {}) }
  }
}
