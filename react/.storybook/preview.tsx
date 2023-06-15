import '@fontsource/ibm-plex-mono'
import 'inter-ui/inter.css'

import { Decorator } from '@storybook/react'

import { ThemeProvider } from '../src/theme'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'

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
    value: '#3d3d3d', // base.canvas.inverse
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: StorybookTheme.docs,
    inlineStories: true,
    source: {
      excludeDecorators: true,
    },
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

const withTheme = withThemeFromJSXProvider({
  themes: THEME_MAP,
  defaultTheme: 'default',
  Provider: ThemeProvider,
})

const withColorMode: Decorator = (storyFn, context) => {
  const bgFromContext = get(context, 'globals.backgrounds.value')
  const bgFromDefault = get(context, 'parameters.backgrounds.default')
  let colorMode: 'dark' | 'light' = 'light'
  if (!bgFromContext && bgFromDefault) {
    colorMode = context.parameters.backgrounds.default as 'dark' | 'light'
  } else {
    colorMode =
      context.parameters.colorMode ||
      get(context, 'globals.backgrounds.value') === backgrounds.dark.value
        ? 'dark'
        : 'light'
  }

  return <ColorModeProvider value={colorMode}>{storyFn()}</ColorModeProvider>
}

export const decorators = [withColorMode, withTheme]
