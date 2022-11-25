/* eslint-env node */
const { mergeConfig } = require('vite')
const path = require('path')

module.exports = {
  features: {
    storyStoreV7: true,
    previewMdx2: true,
  },
  stories: [
    // Introduction stories set first so stories are ordered correctly.
    './introduction/Welcome/Welcome.stories.tsx',
    './introduction/Principles/Principles.stories.tsx',
    './foundations/**/*.stories.@(mdx|js|jsx|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  staticDirs: ['./static'],
  // framework: '@storybook/react',
  core: {
    disableTelemetry: true,
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '~': path.resolve(__dirname, '../src/'),
        },
      },
    })
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docsPage: {
    docs: 'automatic',
  },
}
