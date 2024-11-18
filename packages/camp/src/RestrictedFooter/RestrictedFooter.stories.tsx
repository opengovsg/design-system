import { HStack, Image, Text } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import {
  getMobileViewParameters,
  getTabletViewParameters,
} from '~/utils/storybook'

// @ts-expect-error png module
import appImage from '../../.storybook/assets/restricted_ogp_logo.png'

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
  tags: ['autodocs'],
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

export const WithAppIcon = Template.bind({})
WithAppIcon.args = {
  appName: (
    <HStack spacing="1rem">
      <Image src={appImage} alt="Test image" height="24px" />
      <Text textStyle="body-2" as="span">
        Additional subtext
      </Text>
    </HStack>
  ),
}

export const CompactVariant = Template.bind({})
CompactVariant.args = {
  variant: 'compact',
}

export const FullVariantDarkMode = Template.bind({})
FullVariantDarkMode.args = {
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
  tagline: `Helping to create consistent, accessible, highly usable, and delightful experiences for our public users`,
}

export const FullVariantMobile = Template.bind({})
FullVariantMobile.parameters = getMobileViewParameters()

export const FullVariantTablet = Template.bind({})
FullVariantTablet.parameters = getTabletViewParameters()
