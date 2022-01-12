import { Meta, Story } from '@storybook/react'
import { NumberInput, NumberInputProps } from './NumberInput'

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  decorators: [],
} as Meta

const Template: Story<NumberInputProps> = (args) => <NumberInput {...args} />
export const Default = Template.bind({})
Default.args = {
  placeholder: 'Test placeholder',
}

export const HideSteppers = Template.bind({})
HideSteppers.args = {
  placeholder: 'This field has no steppers',
  showSteppers: false,
}

export const Prefilled = Template.bind({})
Prefilled.args = {
  placeholder: 'Test placeholder',
  defaultValue: '3.142',
  isPrefilled: true,
}

export const Error = Template.bind({})
Error.args = {
  isInvalid: true,
  defaultValue: '-1',
}

export const Success = Template.bind({})
Success.args = {
  isInvalid: false,
  isSuccess: true,
  defaultValue: '1337',
}
export const Disabled = Template.bind({})
Disabled.args = {
  defaultValue: '0',
  isDisabled: true,
}
