import '@fontsource/ibm-plex-mono'
import 'inter-ui/inter.css'

import { Decorator } from '@storybook/react'

import { ThemeProvider, theme as defaultTheme } from '../src/theme'

import { StorybookTheme } from './themes'
import { THEME_MAP } from './colorThemes'
import { ColorModeProvider } from '@chakra-ui/react'
import { get } from '@chakra-ui/utils'

const backgrounds = {
  light: {
    name: 'light',
    value: '#FFFFFF', // base.canvas.default
  },
  dark: {
    name: 'dark',
    value: '#272D41', // base.canvas.inverse
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: StorybookTheme.docs,
    inlineStories: true,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: Object.values(backgrounds),
  },
}

export const THEME_ADDON_BAR_ITEMS = Object.keys(THEME_MAP).map((key) => ({
  value: key,
  title: key,
}))

const withTheme: Decorator = (StoryFn, context) => {
  // Get values from story parameter first, else fallback to globals
  const theme = context.parameters.theme || context.globals.theme
  const themeToUse = THEME_MAP[theme]

  return (
    <ThemeProvider theme={themeToUse ?? defaultTheme}>
      <StoryFn />
    </ThemeProvider>
  )
}

const withColorMode: Decorator = (StoryFn, context) => {
  const colorMode =
    context.parameters.colorMode ||
    get(context, 'globals.backgrounds.value') === backgrounds.dark.value
      ? 'dark'
      : 'light'

  return (
    <ColorModeProvider value={colorMode}>
      <StoryFn />
    </ColorModeProvider>
  )
}

// Add theme selector to storybook addon bar.
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'default',
    toolbar: {
      // The icon for the toolbar item
      icon: 'paintbrush',
      // Array of options
      items: THEME_ADDON_BAR_ITEMS,
    },
  },
}

export const decorators: Decorator[] = [withColorMode, withTheme]
