import '../src/fonts/inter.css'

import { ChakraProvider } from '@chakra-ui/react'
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

export const decorators = [
  (storyFn) => (
    <ChakraProvider resetCSS theme={theme}>
      {storyFn()}
    </ChakraProvider>
  ),
]
