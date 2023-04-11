import { Calendar } from '~/Calendar'

import { useDatePicker } from '../DatePickerContext'

export const DatePickerCalendar = (): JSX.Element => {
  const {
    colorScheme,
    internalValue,
    isDateUnavailable,
    handleDateChange,
    initialFocusRef,
    monthsToDisplay,
    size,
    isMobile,
  } = useDatePicker()

  const displayedSize = isMobile ? 'sm' : size

  return (
    <Calendar
      size={displayedSize}
      monthsToDisplay={monthsToDisplay}
      colorScheme={colorScheme}
      value={internalValue ?? undefined}
      isDateUnavailable={isDateUnavailable}
      onChange={handleDateChange}
      ref={initialFocusRef}
    />
  )
}
