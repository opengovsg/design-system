import { Stack } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { getMobileViewParameters } from '~/utils/storybook'

import { Banner, BannerProps } from './Banner'

export default {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  decorators: [],
  parameters: {
    backgrounds: { default: 'light' },
  },
} as Meta<BannerProps>

const Template: StoryFn<BannerProps> = (args) => <Banner {...args} />
export const Default = Template.bind({})
Default.args = {
  children: 'You can insert a normal string here.',
}

export const Info = Template.bind({})
Info.args = {
  variant: 'info',
  children: `This is a dismissable info banner`,
  isDismissable: true,
}

export const Warn = Template.bind({})
Warn.args = {
  variant: 'warn',
  children: `This is a warning banner`,
}

export const Error = Template.bind({})
Error.args = {
  variant: 'error',
  children: `This is an error banner`,
}

const SizeTemplate: StoryFn<BannerProps> = (args) => {
  return (
    <Stack>
      <Template variant="info" {...args}>
        This is a small dismissable info banner
      </Template>
      <Template variant="warn" {...args}>
        This is a small warning banner
      </Template>
      <Template variant="error" {...args}>
        This is a small error banner
      </Template>
    </Stack>
  )
}

export const Mobile = SizeTemplate.bind({})
Mobile.args = {
  size: 'md',
}
Mobile.parameters = getMobileViewParameters()

export const SmSizeMobile = SizeTemplate.bind({})
SmSizeMobile.args = {
  size: 'sm',
}
SmSizeMobile.parameters = getMobileViewParameters()
