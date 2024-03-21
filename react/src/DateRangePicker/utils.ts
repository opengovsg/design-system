import { isValid } from 'date-fns'

import type { DateRangeValue } from '~/Calendar'

export const validateDateRange = (dateRange: DateRangeValue) => {
  const sortedRange = dateRange
    .sort((a, b) => (a && b ? a.getTime() - b.getTime() : 0))
    .map((date) => (isValid(date) ? date : null)) as DateRangeValue

  const [start, end] = sortedRange
  return {
    start: {
      isValid: isValid(start),
      date: start,
    },
    end: {
      isValid: isValid(end),
      date: end,
    },
  }
}
