import { RangeCalendar } from '~/Calendar'

import { useDateRangePicker } from '../DateRangePickerContext'

export const DateRangePickerCalendar = (): JSX.Element => {
  const {
    colorScheme,
    internalValue,
    isDateUnavailable,
    handleCalendarDateChange,
    initialFocusRef,
    monthsToDisplay,
    size,
    isMobile,
  } = useDateRangePicker()

  const displayedSize = isMobile ? 'sm' : size

  return (
    <RangeCalendar
      size={displayedSize}
      monthsToDisplay={monthsToDisplay}
      colorScheme={colorScheme}
      value={internalValue ?? undefined}
      isDateUnavailable={isDateUnavailable}
      onChange={handleCalendarDateChange}
      ref={initialFocusRef}
    />
  )
}
