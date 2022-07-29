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

## Adding types for TypeScript

Using [`@chakra-ui/cli`](https://www.npmjs.com/package/@chakra-ui/cli), you can also generate types for the design system to provide autocomplete for your TypeScript code.

If you are extending the theme (you used `extendTheme`):

```bash
npx @chakra-ui/cli tokens <path/to/your/theme.(js|ts)>
```

If generating for the base design system:

```bash
npx chakra-cli tokens node_modules/@opengovsg/design-system-react/build/theme/theme.js
```

> Note 🚨: If you delete the node_modules directory, you'll need to re-run the command to get proper typings again.

For convenience, you can add a postinstall script to your package.json, so you don't have to think about this every time you re-install your dependencies.

```json
"scripts": {
  "gen:theme-typings": "chakra-cli tokens node_modules/@opengovsg/design-system-react/build/theme/theme.js",
  "postinstall": "npm run gen:theme-typings"
}
```

## Common problems

### I am seeing

```bash
Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /path/to/project/node_modules/react-markdown/index.js
```

> `react-markdown` is a peer dependency of this design system, and version 8 is automatically installed if your `npm` version is >= 7

Your build pipeline is not configured to run ES Modules. Try using version 6 of `react-markdown`.

```bash
$ npm install react-markdown@6
```

### I am seeing

```bash
Module not found: Can't resolve 'libphonenumber-js/examples.mobile.json'
```

> `libphonenumber-js` is a peer dependency of this design system, and version 8 is automatically installed if your `npm` version is >= 7

If you're on npm version 4 to 6, install `libphonenumber-js` explicitly by executing the following command.

```bash
$ npm install libphonenumber-js
```

## Publishing a new version

In the `react` directory:

```bash
$ git checkout -b release-v<version>
$ npm version <version>
$ git add .
$ git commit
$ git tag <version>
$ git push
$ git push --tags
```

Open 2 PRs:

- `release-v<version> -> alpha / beta / latest` - once this PR is merged, the version will be published to the respective npm tag automatically
- `release-v<version> -> main` - to keep our `main` branch up-to-date with releases

Lastly, create a new release on GitHub for the new tag.

## Further reading

As this design system is built on top of ChakraUI, it is (hopefully) fully compatible with ChakraUI's usage. Read [ChakraUI's documentation](https://chakra-ui.com) for all the available props and usage examples.
