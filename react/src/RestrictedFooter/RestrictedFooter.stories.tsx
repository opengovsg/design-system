import { Meta, StoryFn } from '@storybook/react'

import {
  getMobileViewParameters,
  getTabletViewParameters,
} from '~/utils/storybook'

import { RestrictedFooterProps } from './common/types'
import { RestrictedFooter } from './RestrictedFooter'

const DEFAULT_ARGS: RestrictedFooterProps = {
  appName: 'Camp',
  appLink: 'https://design.hack.gov.sg',
  footerLinks: [
    {
      label: 'User Guide',
      href: '',
    },
    {
      label: 'Privacy',
      href: '',
    },
    {
      label: 'Terms of Use',
      href: '',
    },
    {
      label: 'Report Vulnerability',
      href: '',
    },
  ],
}

export default {
  title: 'Components/RestrictedFooter',
  component: RestrictedFooter,
  decorators: [],
  parameters: {
    layout: 'fullscreen',
  },
  args: DEFAULT_ARGS,
} as Meta<RestrictedFooterProps>

const Template: StoryFn<RestrictedFooterProps> = (args) => (
  <RestrictedFooter {...args} />
)
export const Default = Template.bind({})

export const CompactVariant = Template.bind({})
CompactVariant.args = {
  ...DEFAULT_ARGS,
  variant: 'compact',
}

export const FullVariantDarkMode = Template.bind({})
FullVariantDarkMode.args = {
  ...DEFAULT_ARGS,
  colorMode: 'dark',
}
FullVariantDarkMode.parameters = {
  backgrounds: { default: 'dark' },
}

export const CompactVariantDarkMode = Template.bind({})
CompactVariantDarkMode.args = {
  ...CompactVariant.args,
  colorMode: 'dark',
}
CompactVariantDarkMode.parameters = {
  backgrounds: { default: 'dark' },
}

export const FullVariantWithTagline = Template.bind({})
FullVariantWithTagline.args = {
  ...DEFAULT_ARGS,
  tagline: `Helping to create consistent, accessible, highly usable, and delightful experiences for our public users`,
}

export const FullVariantMobile = Template.bind({})
FullVariantMobile.parameters = getMobileViewParameters()

export const FullVariantTablet = Template.bind({})
FullVariantTablet.parameters = getTabletViewParameters()
