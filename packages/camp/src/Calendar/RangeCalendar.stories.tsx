import { useControllableState } from '@chakra-ui/react'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { userEvent } from '@storybook/test'
import { isWeekend } from 'date-fns'

import { mockDateDecorator } from '~/utils/storybook'

import { RangeCalendar, RangeCalendarProps } from './RangeCalendar'

const StatefulRangeCalendar: StoryFn<RangeCalendarProps> = ({
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

export default {
  title: 'Components/RangeCalendar',
  component: RangeCalendar,
  tags: ['autodocs'],
  decorators: [mockDateDecorator],
  parameters: {
    layout: 'fullscreen',
    mockdate: new Date('2021-12-25T06:22:27.219Z'),
  },
  render: (args) => <StatefulRangeCalendar {...args} />,
} as Meta<RangeCalendarProps>

type Story = StoryObj<RangeCalendarProps>

export const Default: Story = {}

export const RangeCalendarWithValue: Story = {
  args: {
    value: [new Date('2001-01-01'), null],
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

export const RangeCalendarWithRange: Story = {
  args: {
    value: [new Date('2001-01-01'), new Date('2001-02-02')],
  },
}

export const RangeCalendarWeekdayOnly: Story = {
  args: {
    isDateUnavailable: (d) => isWeekend(d),
  },
}

export const HideTodayButton: Story = {
  args: {
    showTodayButton: false,
  },
}

export const SizeSmall: Story = {
  args: {
    size: 'sm',
  },
}

export const RangeCalendarWithDefaultFocusedDate: Story = {
  args: {
    defaultFocusedDate: new Date('2010-01-01'),
  },
}

export const RangeCalendarWithDefaultFocusedDateOverriddenByDefaultValue: Story =
  {
    args: {
      defaultFocusedDate: new Date('2010-01-01'),
      defaultValue: [new Date('2001-01-01'), null],
    },
  }

export const RangeCalendarWithOnMonthYearChangeCallback: Story = {
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
