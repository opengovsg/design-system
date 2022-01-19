# @opengovsg/design-system-react

This design system extends from the wonderful [Chakra UI library](https://github.com/chakra-ui/chakra-ui).

The available components can be viewed at our [Storybook](https://design.hack.gov.sg)

## Installing the design system

ChakraUI is a peer dependency of this design system and should be installed alongside this package. The full list of peer dependencies can be found in the [package.json](package.json).

(You might find that you do not need to install some peer dependencies until you need them.)

```sh
$ npm install --save @opengovsg/design-system-react @chakra-ui/react
# or
$ yarn add @opengovsg/design-system-react @chakra-ui/react
```

# Getting set up

To start using the components, please follow these steps:

1. Wrap your application in a `ThemeProvider` provided by **@opengovsg/design-system-react**.

There is also an optional (though strongly recommended) font CSS file that provides the font that is used throughout the design system.

This CSS file should be imported in the root of your application **once**:

```jsx
// Optional, but strongly recommended to add `inter.css`.
import '@opengovsg/design-system-react/build/fonts/inter.css'
import { ThemeProvider } from '@opengovsg/design-system-react'

const App = ({ children }) => (
  <ThemeProvider>
    <ColorModeProvider>{children}</ColorModeProvider>
  </ThemeProvider>
)
```

`ColorModeProvider` is a context that provides light mode and dark mode values
to the components. It also comes with a function to toggle between light/dark
mode.

However, this design system current **does not** support dark mode for now, and as such do not recommend using `ColorModeProvider`.

3. Now you can start using components like so:

```jsx
import { Button } from '@opengovsg/design-system-react'

const App = () => <Button>Click me</Button>
```

This design system does not provide the full range of components that ChakraUI provides. As such, consume components from the [Chakra UI](https://chakra-ui.com) library as needed. They should work in synergy.

```jsx
import { Box } from '@chakra-ui/react'
import { Button } from '@opengovsg/design-system-react'

const Example = () => (
  <Box>
    <Button>Will work side by side with ChakraUI</Button>
  </Box>
)
```

## Further reading

As this design system is built on top of ChakraUI, it is (hopefully) fully compatible with ChakraUI's usage. Read [ChakraUI's documentation](https://chakra-ui.com) for all the available props and usage examples.
