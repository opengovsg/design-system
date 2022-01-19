export type ThemeColorScheme =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'neutral'
  | 'white'

export const colours = {
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
  primary: {
    50: '#F6F7FC',
    100: '#F6F7FC',
    200: '#E4E7F6',
    300: '#B7C0E6',
    400: '#8998D6',
    500: '#4A61C0',
    600: '#3B4E9A',
    700: '#2C3A73',
    800: '#1E274D',
    900: '#161D3A',
  },
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
  danger: {
    50: '#FFF8F8',
    100: '#FFF8F8',
    200: '#F8EAEA',
    300: '#E8C1C1',
    400: '#D88888',
    500: '#C05050',
    600: '#AD4848',
    700: '#9A4040',
    800: '#733030',
    900: '#602828',
  },
  warning: {
    50: '#FFFCF2',
    100: '#FFFCF2',
    200: '#FDF3D1',
    300: '#FCECB3',
    400: '#FBE495',
    500: '#F9D867',
    600: '#E0C25D',
    700: '#AE9748',
    800: '#7D6C34',
    900: '#4B411F',
  },
  success: {
    50: '#E6FCF7',
    100: '#E6FCF7',
    200: '#CDF5EB',
    300: '#9BEBD7',
    400: '#50DBB8',
    500: '#05CC9A',
    600: '#05B88B',
    700: '#038564',
    800: '#03664D',
    900: '#023D2E',
  },
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
