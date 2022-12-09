import { hexToRgba } from '../utils/hexToRgba'

export type ThemeColorScheme =
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'grey'
  | 'primary'
  | 'warning'
  | 'success'
  | 'neutral'

const blue = {
  50: '#F7F9FE',
  100: '#E1EBFD',
  200: '#ACC7FA',
  300: '#82ABF7',
  400: '#568DF4',
  500: '#276EF1',
  600: '#0D4FCA',
  700: '#0B44AC',
  800: '#093890',
  900: '#072A69',
}
const red = {
  50: '#fef7f7',
  100: '#fbe4e4',
  200: '#f4acac',
  300: '#ee8080',
  400: '#e74f4f',
  500: '#c03434',
  600: '#992a2a',
  700: '#852424',
  800: '#721f1f',
  900: '#571717',
}
const green = {
  50: '#f5fbf9',
  100: '#d6f0e7',
  200: '#7ccfb3',
  300: '#33b488',
  400: '#009762',
  500: '#00774e',
  600: '#005f3e',
  700: '#005336',
  800: '#00462e',
  900: '#003523',
}
const yellow = {
  50: '#fffae1',
  100: '#FFDA68',
  200: '#E2B73E',
  300: '#C4992A',
  400: '#A77C18',
  500: '#8B6005',
  600: '#704C00',
  700: '#624200',
  800: '#533800',
  900: '#3f2b00',
}
const grey = {
  50: '#f9f9f9',
  100: '#e9e9e9',
  200: '#bfbfbf',
  300: '#a0a0a0',
  400: '#848484',
  500: '#686868',
  600: '#535353',
  700: '#474747',
  800: '#3d3d3d',
  900: '#2e2e2e',
}

const primary = blue

const critical = red

const warning = yellow

const success = green

// Backwards compatibility
const danger = red

const standard = {
  white: '#FFFFFF',
  black: '#000000',
}

export const colours = {
  interaction: {
    main: {
      default: primary[500],
      hover: primary[600],
      active: primary[700],
    },
    critical: {
      default: red[500],
      hover: red[600],
      active: red[700],
    },
    warning: {
      default: yellow[100],
      hover: yellow[200],
      active: yellow[300],
    },
    success: {
      default: green[500],
      hover: green[600],
      active: green[700],
    },
    support: {
      disabled: grey[100],
      disabledContent: grey[300],
      placeholder: grey[300],
      unselected: grey[300],
      unselectedDark: grey[500],
      selected: grey[500],
    },
    tinted: {
      main: {
        hover: hexToRgba(primary[500], 0.04),
        active: hexToRgba(primary[500], 0.12),
      },
      critical: {
        hover: hexToRgba(red[500], 0.04),
        active: hexToRgba(red[500], 0.12),
      },
      dark: {
        hover: hexToRgba(standard.black, 0.1),
        active: hexToRgba(standard.black, 0.2),
      },
      light: {
        hover: hexToRgba(standard.white, 0.1),
        active: hexToRgba(standard.white, 0.2),
      },
    },
    muted: {
      main: {
        active: primary[100],
      },
      critical: {
        active: red[100],
      },
      warning: {
        active: yellow[100],
      },
    },
  },
  base: {
    content: {
      default: grey[700],
      inverse: standard.white,
      dark: grey[900],
    },
  },
  utility: {
    focus: {
      default: blue[500],
      inverse: standard.white,
    },
  },
  blue,
  red,
  yellow,
  green,
  grey,
  white: {
    50: '#FFFFFF',
    100: '#FFFFFF',
    200: '#FFFFFF',
    300: '#FFFFFF',
    400: '#FFFFFF',
    500: '#FFFFFF',
    600: '#FFFFFF',
    700: '#FFFFFF',
    800: '#FFFFFF',
    900: '#FFFFFF',
  },
  primary,
  secondary: {
    50: '#F5F6F8',
    100: '#F5F6F8',
    200: '#DADCE3',
    300: '#A2A8B9',
    400: '#69738E',
    500: '#445072',
    600: '#36405B',
    700: '#293044',
    800: '#1B202E',
    900: '#0E1017',
  },
  critical,
  warning,
  success,
  danger,
  neutral: {
    100: '#FBFCFD',
    200: '#F0F0F1',
    300: '#E1E2E4',
    400: '#C9CCCF',
    500: '#ABADB2',
    600: '#999B9F',
    700: '#636467',
    800: '#48494B',
    900: '#242425',
  },
}
