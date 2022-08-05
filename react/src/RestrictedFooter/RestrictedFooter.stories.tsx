import { Meta, Story } from '@storybook/react'

import { viewports } from '~/utils/storybook'

import { RestrictedFooterProps } from './common/types'
import { RestrictedFooter } from './RestrictedFooter'

const DEFAULT_ARGS: RestrictedFooterProps = {
  appName: 'Camp',
  appLink: 'https://design.hack.gov.sg',
  tagline: `Helping to create consistent, accessible, highly usable, and delightful experiences for our public users`,
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

const Template: Story<RestrictedFooterProps> = (args) => (
  <RestrictedFooter {...args} />
)
export const Default = Template.bind({})

export const CompactVariant = Template.bind({})
CompactVariant.args = {
  ...DEFAULT_ARGS,
  variant: 'compact',
}

export const WithDarkBackground = Template.bind({})
WithDarkBackground.args = {
  ...DEFAULT_ARGS,
  textColorScheme: 'white',
  containerProps: { bg: '#000' },
}

export const WithTagline = Template.bind({})
WithTagline.args = {
  ...DEFAULT_ARGS,
  tagline: 'Build secure government forms in minutes',
}

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
  chromatic: { viewports: [viewports.xs] },
}

export const Tablet = Template.bind({})
Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
  chromatic: { viewports: [viewports.md] },
}
