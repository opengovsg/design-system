import { pick } from 'lodash'

import { DatePickerProps } from '../DatePicker'

export const pickCalendarProps = (props: DatePickerProps) => {
  return pick(
    props,
    'isCalendarFixedHeight',
    'monthsToDisplay',
    'isDateUnavailable',
    'defaultFocusedDate',
    'showOutsideDays',
    'showTodayButton',
  )
}
