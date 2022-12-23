import { IconButton } from '~/IconButton'
import { BxCalendar } from '~/icons'

import { useDateRangePicker } from '../DateRangePickerContext'

export const CalendarButton = (): JSX.Element => {
  const {
    disclosureProps: { onOpen, isOpen },
    calendarButtonAria,
    fcProps: { isDisabled, isReadOnly, isInvalid },
  } = useDateRangePicker()

  return (
    <IconButton
      aria-invalid={isInvalid}
      onClick={onOpen}
      variant="inputAttached"
      aria-label={calendarButtonAria}
      icon={<BxCalendar />}
      isActive={isOpen}
      isDisabled={isDisabled || isReadOnly}
    />
  )
}
