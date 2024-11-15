import { Meta } from '@storybook/react'

import * as stories from './IntlPhoneNumberInput.stories'
import { PhoneNumberInput, PhoneNumberInputProps } from './PhoneNumberInput'

export default {
  title: 'Components/PhoneNumberInput/SingleCountry',
  component: PhoneNumberInput,
  tags: ['autodocs'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  args: {
    allowInternational: false,
  },
  decorators: [],
} as Meta<PhoneNumberInputProps>

export const Default = stories.Default.bind({})
Default.args = stories.Default.args

export const Prefilled = stories.Prefilled.bind({})
Prefilled.args = {
  ...stories.Prefilled.args,
  defaultCountry: 'US',
}

export const Error = stories.Error.bind({})
Error.args = stories.Error.args

export const Success = stories.Success.bind({})
Success.args = stories.Success.args

export const Disabled = stories.Disabled.bind({})
Disabled.args = stories.Disabled.args

export const Sizes = stories.Sizes.bind({})
