import { useControllableState } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'
import { isWeekend } from 'date-fns'

import { mockDateDecorator } from '~/utils/storybook'

import { RangeCalendar, RangeCalendarProps } from './RangeCalendar'

export default {
  title: 'Components/Calendar/RangeCalendar',
  component: RangeCalendar,
  tags: ['autodocs'],
  decorators: [mockDateDecorator],
  parameters: {
    layout: 'fullscreen',
    mockdate: new Date('2021-12-25T06:22:27.219Z'),
  },
} as Meta<RangeCalendarProps>

const RangeCalendarOnlyTemplate: StoryFn<RangeCalendarProps> = ({
  value,
  onChange,
  ...args
}) => {
  const [internalValue, setInternalValue] = useControllableState({
    value,
    onChange,
  })

  return (
    <RangeCalendar
      value={internalValue}
      onChange={setInternalValue}
      {...args}
    />
  )
}

export const Default = RangeCalendarOnlyTemplate.bind({})

export const RangeCalendarWithValue = RangeCalendarOnlyTemplate.bind({})
RangeCalendarWithValue.args = {
  value: [new Date('2001-01-01'), null],
}

export const RangeCalendarWithRange = RangeCalendarOnlyTemplate.bind({})
RangeCalendarWithRange.args = {
  value: [new Date('2001-01-01'), new Date('2001-02-02')],
}

export const RangeCalendarWeekdayOnly = RangeCalendarOnlyTemplate.bind({})
RangeCalendarWeekdayOnly.args = {
  isDateUnavailable: (d) => isWeekend(d),
}

export const SizeSmall = RangeCalendarOnlyTemplate.bind({})
SizeSmall.args = {
  size: 'sm',
}

export const RangeCalendarWithDefaultFocusedDate =
  RangeCalendarOnlyTemplate.bind({})
RangeCalendarWithDefaultFocusedDate.args = {
  defaultFocusedDate: new Date('2010-01-01'),
}

export const RangeCalendarWithDefaultFocusedDateOverriddenByDefaultValue =
  RangeCalendarOnlyTemplate.bind({})
RangeCalendarWithDefaultFocusedDateOverriddenByDefaultValue.args = {
  defaultFocusedDate: new Date('2010-01-01'),
  defaultValue: [new Date('2001-01-01'), null],
}
