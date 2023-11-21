import { Divider, Stack } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

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

export const SmSize = () => {
  return (
    <Stack>
      <Template size="sm" variant="info">
        This is a small dismissable info banner
      </Template>
      <Template size="sm" variant="warn">
        This is a small warning banner
      </Template>
      <Template size="sm" variant="error">
        This is a small error banner
      </Template>
    </Stack>
  )
}
