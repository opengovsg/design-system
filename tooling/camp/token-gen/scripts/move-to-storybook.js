// Script to move theme files to design system's storybook
// Usage: node scripts/move-to-storybook.js

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const { camelCase } = require('lodash')

// src: token-gen/themes/<PRODUCT>
// dest: react/.storybook/colorThemes/<PRODUCT>

const src = path.join(__dirname, '../themes')
const dest = path.join(__dirname, '../../react/.storybook/colorThemes')

const products = fs.readdirSync(src)

products.forEach((product) => {
  const productSrc = path.join(src, product)
  const productDest = path.join(dest, product)
  if (!fs.existsSync(productDest)) {
    fs.mkdirSync(productDest)
  }

  const files = fs.readdirSync(productSrc)
  files.forEach((file) => {
    // read file content
    const srcFile = path.join(productSrc, file)
    const destFile = path.join(productDest, file)
    // Copy file to destFile
    fs.cpSync(srcFile, destFile)
  })

  // Create theme file if does not exist
  const themeFile = path.join(productDest, 'theme.ts')
  const content = `import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { shadows } from './shadows'
import { spacing } from './spacing'
import { textStyles } from './textStyles'
import { typography } from './typography'

import { theme as baseTheme } from '~/theme/theme'

export const theme = extendTheme(baseTheme, {
  colors,
  shadows,
  space: spacing,
  fontSizes: typography.fontSize,
  fontWeights: typography.fontWeights,
  lineHeights: typography.lineHeights,
  letterSpacings: typography.letterSpacing,
  textStyles,
})
`
  if (!fs.existsSync(themeFile)) {
    fs.writeFileSync(themeFile, content)
  }
})

// react/.storybook/colorThemes/index.ts
const storybookColorThemeDest = path.join(
  __dirname,
  '../../react/.storybook/colorThemes/index.ts',
)
let storybookColorThemeIndex = ``
// Create index theme file for Storybook
products.forEach((product) => {
  storybookColorThemeIndex += `import { theme as ${camelCase(
    product,
  )}Theme } from './${product}/theme'\n`
})
storybookColorThemeIndex += `\nexport const THEME_MAP: Record<string, typeof defaultTheme> = {`
products.forEach((product) => {
  storybookColorThemeIndex += `\n  ${camelCase(product)}: ${camelCase(
    product,
  )}Theme,`
})
storybookColorThemeIndex += `\n}\n`
fs.writeFileSync(storybookColorThemeDest, storybookColorThemeIndex)
