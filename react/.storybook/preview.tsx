import 'inter-ui/inter.css'
import '@fontsource/ibm-plex-mono'

import { ChakraProvider } from '@chakra-ui/react'
import { Decorator } from '@storybook/react'

import { theme } from '../src/theme'

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
  (storyFn) => (
    <ChakraProvider portalZIndex={40} resetCSS theme={theme}>
      {storyFn()}
    </ChakraProvider>
  ),
]
