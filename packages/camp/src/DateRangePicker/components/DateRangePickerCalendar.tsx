import { RangeCalendar } from '~/Calendar'

import { useDateRangePicker } from '../DateRangePickerContext'

export const DateRangePickerCalendar = (): JSX.Element => {
  const {
    colorScheme,
    internalValue,
    handleCalendarDateChange,
    initialFocusRef,
    size,
    isMobile,
    calendarProps: { isCalendarFixedHeight, ...restCalendarProps },
  } = useDateRangePicker()

  const displayedSize = isMobile ? 'sm' : size

  return (
    <RangeCalendar
      size={displayedSize}
      colorScheme={colorScheme}
      value={internalValue ?? undefined}
      onChange={handleCalendarDateChange}
      ref={initialFocusRef}
      isCalendarFixedHeight={isMobile ? false : isCalendarFixedHeight}
      {...restCalendarProps}
    />
  )
}
