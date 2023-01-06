import { addons } from '@storybook/manager-api'

import { StorybookTheme } from './themes'

addons.setConfig({
  theme: StorybookTheme.manager,
})
