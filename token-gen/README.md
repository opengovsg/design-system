# OGP Design System Theme Generator

This directory contains a CLI to generate theme files from tokens defined in the `tokens` directory.
The CLI is built using [Style Dictionary](https://amzn.github.io/style-dictionary/#/).

## Generating themes

```
├── README.md
├── tokens-generated/
│   ├── raw/
│       ├── $metadata.json
│       ├── $themes.json
│       ├── global.json
│       ├── <theme>.json
│   ├── transformed/
│       ├── <theme name>.json
├── themes/
│   ├── default/
│      ├── colors.ts
│      ├── shadows.ts
│      ├── spacing.ts
│      ├── textStyles.ts
│      ├── typography.ts
│   ├── <themes>/
│      ├── colors.ts
│      ├── shadows.ts
│      ├── spacing.ts
│      ├── textStyles.ts
│      ├── typography.ts


```

`tokens` is a `git` submodule that references [opengovsg/design-tokens](https://github.com/opengovsg/design-tokens).

To initialize the submodule and keep the submodule up-to-date when the `design-tokens` repository is updated, run the following command:

```bash
git submodule update --remote
```

`tokens-generated/raw` is generated by a script (`split.js`) that splits the single `token.json` in the `tokens` submodule into multiple files per theme.

`tokens-generated/transformed` is generated by a package that transforms the tokens in `tokens-generated/raw` into a format that is compatible with Style Dictionary.

To generate theme files, run the following command:

```bash
npm run build
```

## Using generated themes

The generated themes are located in the `themes` directory. The theme files are in TypeScript and can be imported into your application that is using the OGP Design System.

```
├── src/
│   ├── App.tsx
│   ├── index.tsx
│   ├── theme/    // <- Import theme files from token-gen/themes/<name> here
│       ├── colors.ts
│       ├── shadows.ts
│       ├── spacing.ts
│       ├── textStyles.ts
│       ├── typography.ts
|       ├── theme.ts // <- Import theme files into this file
├── package.json
├── ...
```

The theme files can then be imported into your application's theme as follows:

```typescript
// src/theme/theme.ts

import { extendTheme } from '@chakra-ui/react'
import { colours } from './colours'
import { shadows } from './shadows'
import { spacing } from './spacing'
import { textStyles } from './textStyles'
import { typography } from './typography'

import { theme as ogpTheme } from '@opengovsg/design-system-react'

export const theme = extendTheme(ogpTheme, {
  colors: colours,
  shadows: shadows,
  space: spacing,
  fontSizes: typography.fontSize,
  fontWeights: typography.fontWeights,
  lineHeights: typography.lineHeights,
  letterSpacings: typography.letterSpacing,
  textStyles,
})
```

The exported theme can then be used in your application as follows:

```typescript
// src/index.tsx

import { theme } from './theme/theme'

function App() {
  return <ThemeProvider theme={theme}>...</ThemeProvider>
}
```
