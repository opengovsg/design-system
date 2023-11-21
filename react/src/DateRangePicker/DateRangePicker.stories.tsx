import { Meta, StoryFn } from '@storybook/react'

import { getMobileViewParameters, mockDateDecorator } from '~/utils/storybook'

import { DateRangePicker, DateRangePickerProps } from './DateRangePicker'

export default {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
  decorators: [mockDateDecorator],
  parameters: {
    mockdate: new Date('2021-12-25T06:22:27.219Z'),
  },
} as Meta<DateRangePickerProps>

const Template: StoryFn<DateRangePickerProps> = (args) => (
  <DateRangePicker {...args} />
)
export const Default = Template.bind({})

export const DateRangePickerWithValue = Template.bind({})
DateRangePickerWithValue.args = {
  defaultValue: [new Date('2001-01-01'), null],
}
export const SelectTodayWhenTodayButtonClicked = Template.bind({})
SelectTodayWhenTodayButtonClicked.args = {
  shouldSetDateOnTodayButtonClick: true,
}

export const DateRangePickerDisallowManualInput = Template.bind({})
DateRangePickerDisallowManualInput.args = {
  allowManualInput: false,
  defaultValue: [new Date('2021-09-13'), null],
}

export const FixedHeightCalendarPopover = Template.bind({})
FixedHeightCalendarPopover.args = {
  isCalendarFixedHeight: true,
}

export const DatePickerInvalid = Template.bind({})
DatePickerInvalid.args = {
  isInvalid: true,
  defaultValue: [new Date('2001-01-01'), new Date('2001-01-03')],
}

export const DatePickerDisabled = Template.bind({})
DatePickerDisabled.args = {
  isDisabled: true,
  defaultValue: [new Date('2001-01-01'), new Date('2002-01-03')],
}

export const Mobile = Template.bind({})
Mobile.parameters = getMobileViewParameters()

export const SizeSmall = Template.bind({})
SizeSmall.args = {
  size: 'sm',
}

export const SizeXs = Template.bind({})
SizeXs.args = {
  size: 'xs',
}
