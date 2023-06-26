import { UseProvideCalendarProps } from './CalendarContext'

export type CalendarBaseProps = Pick<
  UseProvideCalendarProps,
  | 'colorScheme'
  | 'isDateUnavailable'
  | 'monthsToDisplay'
  | 'size'
  | 'defaultFocusedDate'
  | 'isCalendarFixedHeight'
> & {
  /**
   * Whether to show or hide the button to focus on Today.
   * @default true
   */
  showTodayButton?: boolean
}

export type DateRangeValue = [Date, Date] | [Date, null] | [null, null]
