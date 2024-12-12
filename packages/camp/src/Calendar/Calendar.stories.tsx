import { useControllableState } from '@chakra-ui/react'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { userEvent } from '@storybook/test'
import { isWeekend } from 'date-fns'

import { mockDateDecorator } from '~/utils/storybook'

import { Calendar, CalendarProps } from './Calendar'

const StatefulCalendar: StoryFn<CalendarProps> = ({
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

export default {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  decorators: [mockDateDecorator],
  parameters: {
    layout: 'fullscreen',
    mockdate: new Date('2021-12-25T06:22:27.219Z'),
  },
  render: (args) => {
    return <StatefulCalendar {...args} />
  },
} as Meta<CalendarProps>

type Story = StoryObj<CalendarProps>

export const Default: Story = {}

export const CalendarWithValue: Story = {
  args: {
    value: new Date('2001-01-01'),
  },
}

export const SelectTodayWhenTodayButtonClicked: Story = {
  args: {
    shouldSetDateOnTodayButtonClick: true,
  },
  play: async ({ canvas }) => {
    const todayButton = canvas.getByText('Today')
    userEvent.click(todayButton)
  },
}

export const HideOutsideDays: Story = {
  args: {
    showOutsideDays: false,
  },
}

export const HideTodayButton: Story = {
  args: {
    showTodayButton: false,
  },
}

export const CalendarWeekdayOnly: Story = {
  args: {
    isDateUnavailable: (d) => isWeekend(d),
  },
}

export const SizeSmall: Story = {
  args: {
    size: 'sm',
  },
}

export const CalendarWithDefaultFocusedDate: Story = {
  args: {
    defaultFocusedDate: new Date('2010-01-01'),
  },
}

export const CalendarWithDefaultFocusedDateOverriddenByDefaultValue: Story = {
  args: {
    defaultFocusedDate: new Date('2010-05-01'),
    defaultValue: new Date('2001-01-01'),
  },
}

export const CalendarWithOnMonthYearChangeCallback: Story = {
  args: {
    onMonthChange: (month) => alert(`month changed to: ${month}`),
    onYearChange: (year) => alert(`year changed to: ${year}`),
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}
