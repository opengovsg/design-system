import { useControllableState } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { isWeekend } from 'date-fns'

import { mockDateDecorator } from '~/utils/storybook'

import { Calendar, CalendarProps } from './Calendar'

export default {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  decorators: [mockDateDecorator],
  parameters: {
    layout: 'fullscreen',
    mockdate: new Date('2021-12-25T06:22:27.219Z'),
  },
} as Meta<CalendarProps>

const CalendarOnlyTemplate: StoryFn<CalendarProps> = ({
  value,
  onChange,
  ...args
}) => {
  const [internalValue, setInternalValue] = useControllableState({
    value,
    onChange,
  })

  return (
    <Calendar value={internalValue} onChange={setInternalValue} {...args} />
  )
}

export const Default = CalendarOnlyTemplate.bind({})

export const CalendarWithValue = CalendarOnlyTemplate.bind({})
CalendarWithValue.args = {
  value: new Date('2001-01-01'),
}

export const SelectTodayWhenTodayButtonClicked = CalendarOnlyTemplate.bind({})
SelectTodayWhenTodayButtonClicked.args = {
  shouldSetDateOnTodayButtonClick: true,
}
SelectTodayWhenTodayButtonClicked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const todayButton = canvas.getByText('Today')
  userEvent.click(todayButton)
}

export const HideOutsideDays = CalendarOnlyTemplate.bind({})
HideOutsideDays.args = {
  showOutsideDays: false,
}

export const HideTodayButton = CalendarOnlyTemplate.bind({})
HideTodayButton.args = {
  showTodayButton: false,
}

export const CalendarWeekdayOnly = CalendarOnlyTemplate.bind({})
CalendarWeekdayOnly.args = {
  isDateUnavailable: (d) => isWeekend(d),
}

export const SizeSmall = CalendarOnlyTemplate.bind({})
SizeSmall.args = {
  size: 'sm',
}

export const CalendarWithDefaultFocusedDate = CalendarOnlyTemplate.bind({})
CalendarWithDefaultFocusedDate.args = {
  defaultFocusedDate: new Date('2010-01-01'),
}

export const CalendarWithDefaultFocusedDateOverriddenByDefaultValue =
  CalendarOnlyTemplate.bind({})
CalendarWithDefaultFocusedDateOverriddenByDefaultValue.args = {
  defaultFocusedDate: new Date('2010-05-01'),
  defaultValue: new Date('2001-01-01'),
}

export const CalendarWithOnMonthYearChangeCallback = CalendarOnlyTemplate.bind(
  {},
)
CalendarWithOnMonthYearChangeCallback.args = {
  onMonthChange: (month) => alert(`month changed to: ${month}`),
  onYearChange: (year) => alert(`year changed to: ${year}`),
}
