import path from 'path'
import type { UserConfig } from 'vite'

export default {
  features: {},
  stories: [
    './introduction/Welcome/Welcome.stories.tsx',
    './introduction/Principles/Principles.stories.tsx',
    './foundations/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react-vite',
  staticDirs: ['./static'],
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config: UserConfig) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite')

    return mergeConfig(config, {
      resolve: {
        alias: {
          '~': path.resolve(__dirname, '../src/'),
        },
      },
    })
  },
  docs: {
    autodocs: 'tag',
  },
}
