import { Calendar } from '~/Calendar'

import { useDatePicker } from '../DatePickerContext'

export const DatePickerCalendar = (): JSX.Element => {
  const {
    colorScheme,
    internalValue,
    handleDateChange,
    initialFocusRef,
    size,
    isMobile,
    calendarProps: { isCalendarFixedHeight, ...restCalendarProps },
  } = useDatePicker()

  const displayedSize = isMobile ? 'sm' : size

  return (
    <Calendar
      size={displayedSize}
      colorScheme={colorScheme}
      value={internalValue ?? undefined}
      onChange={handleDateChange}
      ref={initialFocusRef}
      isCalendarFixedHeight={isMobile ? true : isCalendarFixedHeight}
      {...restCalendarProps}
    />
  )
}
