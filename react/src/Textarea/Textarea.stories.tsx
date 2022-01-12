import { Meta, Story } from '@storybook/react'
import { Textarea, TextareaProps } from './Textarea'

export default {
  title: 'Components/Textarea',
  component: Textarea,
  decorators: [],
} as Meta

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />
export const Default = Template.bind({})
Default.args = {
  placeholder: 'Test placeholder',
}

export const Prefilled = Template.bind({})
Prefilled.args = {
  placeholder: 'Test placeholder',
  defaultValue: 'Prefilled field',
  isPrefilled: true,
}

export const Error = Template.bind({})
Error.args = {
  isInvalid: true,
  placeholder: 'Test placeholder',
  defaultValue: 'Field error',
}

export const Success = Template.bind({})
Success.args = {
  isInvalid: false,
  isSuccess: true,
  placeholder: 'Test placeholder',
  defaultValue: 'Field success',
}

export const Disabled = Template.bind({})
Disabled.args = {
  defaultValue: 'Some text',
  placeholder: 'Test placeholder',
  isDisabled: true,
}
