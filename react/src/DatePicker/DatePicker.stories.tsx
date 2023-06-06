import { Meta, StoryFn } from '@storybook/react'

import { getMobileViewParameters, mockDateDecorator } from '~/utils/storybook'

import { DatePicker, DatePickerProps } from './DatePicker'

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  decorators: [mockDateDecorator],
  parameters: {
    mockdate: new Date('2021-12-25T06:22:27.219Z'),
  },
} as Meta<DatePickerProps>

const Template: StoryFn<DatePickerProps> = (args) => <DatePicker {...args} />
export const Default = Template.bind({})

export const DatePickerWithValue = Template.bind({})
DatePickerWithValue.args = {
  defaultValue: new Date('2001-01-01'),
}

export const DatePickerInvalid = Template.bind({})
DatePickerInvalid.args = {
  isInvalid: true,
  defaultValue: new Date('2001-01-01'),
}

export const DatePickerDisabled = Template.bind({})
DatePickerDisabled.args = {
  isDisabled: true,
  defaultValue: new Date('2001-01-01'),
}

export const DatePickerDisallowManualInput = Template.bind({})
DatePickerDisallowManualInput.args = {
  allowManualInput: false,
  defaultValue: new Date('2021-09-13'),
}

export const SizeSmall = Template.bind({})
SizeSmall.args = {
  size: 'sm',
  defaultValue: new Date('2021-09-13'),
}

export const SizeXs = Template.bind({})
SizeXs.args = {
  size: 'xs',
  defaultValue: new Date('2021-09-13'),
}

export const Mobile = Template.bind({})
Mobile.parameters = getMobileViewParameters()
