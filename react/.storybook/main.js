const path = require('path')

module.exports = {
  features: {
    emotionAlias: false,
    storyStoreV7: true,
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
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
