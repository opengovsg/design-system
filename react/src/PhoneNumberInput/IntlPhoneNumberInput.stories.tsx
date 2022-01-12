import { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import { PhoneNumberInput, PhoneNumberInputProps } from './PhoneNumberInput'

export default {
  title: 'Components/PhoneNumberInput/International',
  component: PhoneNumberInput,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [],
} as Meta

const Template: Story<PhoneNumberInputProps> = (args) => {
  const [value, setValue] = useState<string | undefined>(args.value ?? '')
  return (
    <PhoneNumberInput
      {...args}
      value={value}
      onChange={(...params) => {
        args.onChange?.(...params)
        setValue(...params)
      }}
    />
  )
}
export const Default = Template.bind({})
Default.args = {}

export const Prefilled = Template.bind({})
Prefilled.args = {
  value: '+12015550123',
  isPrefilled: true,
}

export const Error = Template.bind({})
Error.args = {
  isInvalid: true,
  value: '999',
}

export const Success = Template.bind({})
Success.args = {
  isInvalid: false,
  isSuccess: true,
  placeholder: 'Enter number',
  value: '+6598765432',
}
export const Disabled = Template.bind({})
Disabled.args = {
  value: '123',
  isDisabled: true,
}
