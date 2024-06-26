import { ComponentWithAs as _, forwardRef } from '@chakra-ui/react'

import { RangeCalendarProps } from '~/Calendar'
import { DatePickerBaseProps } from '~/DatePicker'

import { CalendarButton } from './components/CalendarButton'
import { DateRangePickerCalendar } from './components/DateRangePickerCalendar'
import { DateRangePickerContent } from './components/DateRangePickerContent'
import { DateRangePickerWrapper } from './components/DateRangePickerWrapper'
import { DateRangePickerProvider } from './DateRangePickerContext'

export interface DateRangePickerProps
  extends DatePickerBaseProps,
    RangeCalendarProps {
  /**
   * Separator between dates
   * @defaultValue `"to"`
   */
  labelSeparator?: string
}

export const DateRangePicker = forwardRef<DateRangePickerProps, 'input'>(
  (props, ref) => {
    return (
      <DateRangePickerProvider {...props}>
        <DateRangePickerWrapper ref={ref}>
          <CalendarButton />
          <DateRangePickerContent>
            <DateRangePickerCalendar />
          </DateRangePickerContent>
        </DateRangePickerWrapper>
      </DateRangePickerProvider>
    )
  },
)

DateRangePicker.displayName = 'DateRangePicker'
