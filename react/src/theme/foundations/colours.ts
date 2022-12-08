export type ThemeColorScheme =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'neutral'
  | 'white'

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
const standard = {
  white: '#ffffff',
  black: '#000000',
}

const primary = blue

const danger = red

const warning = yellow

const success = green

export const colours = {
  interaction: {
    main: {
      default: primary[500],
      hover: primary[600],
      active: primary[700],
    },
  },
  utility: {
    focus: {
      default: primary[500],
    },
  },
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
  danger,
  warning,
  success,
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
