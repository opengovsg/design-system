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
  children: `This is a dismissiable info banner`,
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
