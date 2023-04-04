import { mergeConfig, UserConfig } from 'vite'
import turbosnap from 'vite-plugin-turbosnap'
import path from 'path'
export default {
  features: {
    previewMdx2: true,
  },
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
    '@storybook/addon-styling',
  ],
  framework: '@storybook/react-vite',
  staticDirs: ['./static'],
  core: {
    disableTelemetry: true,
  },
  async viteFinal(
    config: UserConfig,
    {
      configType,
    }: {
      configType: string
    },
  ) {
    return mergeConfig(config, {
      plugins:
        configType === 'PRODUCTION'
          ? [
              turbosnap({
                rootDir: config.root ?? process.cwd(),
              }),
            ]
          : [],
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
