import { useState } from 'react'
import { Meta, StoryFn, StoryObj } from '@storybook/react'

import * as stories from './IntlPhoneNumberInput.stories'
import { PhoneNumberInput, PhoneNumberInputProps } from './PhoneNumberInput'

const Template: StoryFn<PhoneNumberInputProps> = (args) => {
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

export default {
  title: 'Components/PhoneNumberInput/SingleCountry',
  component: PhoneNumberInput,
  tags: ['autodocs'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  args: {
    allowInternational: false,
  },
  decorators: [],
  render: (args) => <Template {...args} />,
} as Meta<PhoneNumberInputProps>

type Story = StoryObj<PhoneNumberInputProps>

export const Default: Story = {}

export const Prefilled: Story = {
  args: {
    ...stories.Prefilled.args,
    defaultCountry: 'US',
  },
}

export const Error: Story = {
  args: stories.Error.args,
}

export const Success: Story = {
  args: stories.Success.args,
}

export const Disabled: Story = {
  args: stories.Disabled.args,
}

export const Sizes = stories.Sizes.bind({})
