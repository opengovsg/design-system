/* eslint-env node */
const { mergeConfig } = require('vite')
const path = require('path')

module.exports = {
  features: {
    emotionAlias: false,
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
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  staticDirs: ['./static'],
  // framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
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
  webpackFinal: async (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        type: 'javascript/auto',
        test: /\.mjs$/,
        include: /node_modules/,
      },
    ]
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../src/'),
    }

    return config
  },
}
