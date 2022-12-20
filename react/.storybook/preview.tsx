import '@fontsource/ibm-plex-mono'
import 'inter-ui/inter.css'

import { Decorator } from '@storybook/react'

import { ThemeProvider } from '../src/theme'

import { StorybookTheme } from './themes'

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
}

export const decorators: Decorator[] = [
  (storyFn) => <ThemeProvider>{storyFn()}</ThemeProvider>,
]
