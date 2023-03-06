import { UseProvideCalendarProps } from './CalendarContext'

export type CalendarBaseProps = Pick<
  UseProvideCalendarProps,
  'colorScheme' | 'isDateUnavailable' | 'monthsToDisplay' | 'size'
>

export type DateRangeValue = [Date, Date] | [Date, null] | [null, null]
