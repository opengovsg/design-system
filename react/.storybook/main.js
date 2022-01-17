const path = require('path')

module.exports = {
  features: {
    emotionAlias: false,
    storyStoreV7: true,
  },
  stories: [
    // Introduction stories set first so stories are ordered correctly.
    './introduction/Welcome/Welcome.stories.tsx',
    './introduction/Principles/Principles.stories.tsx',
    './foundations/**/*.stories.@(mdx|js|jsx|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  staticDirs: ['../storybook-resources'],
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
