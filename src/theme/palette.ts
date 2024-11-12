const primary = {
  light: '#42a5f5',
  main: '#1976d2',
  dark: '#1565c0',
  contrastTest: '',
}

const secondary = {
  light: '#ba68c8',
  main: '#9c27b0',
  dark: '#7b1fa2',
  contrastTest: '',
}

const error = {
  light: '#ef5350',
  main: '#d32f2f',
  dark: '#c62828',
  contrastTest: '',
}

const warnings = {
  light: '#ff9800',
  main: '#ed6c02',
  dark: '#e65100',
  contrastTest: '',
}

const info = {
  light: '#03a9f4',
  main: '#0288d1',
  dark: '#01579b',
  contrastTest: '',
}

const success = {
  light: '#4caf50',
  main: '#2e7d32',
  dark: '#1b5e20',
  contrastTest: '',
}

const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161',
}

export const palette = {
  common: {
    black: '#000',
    white: '#fff',
  },
  primary,
  secondary,
  info,
  success,
  warnings,
  error,
  grey,
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    divider: 'rgba(0, 0, 0, 0.12)',
  },
  background: {
    paper: '#fff',
    default: '#fff',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
}
