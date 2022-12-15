import { IconButton } from '~/IconButton'
import { BxCalendar } from '~/icons'

import { useDatePicker } from '../DatePickerContext'

export const CalendarButton = (): JSX.Element => {
  const {
    disclosureProps: { onOpen, isOpen },
    calendarButtonAria,
    fcProps: { isDisabled, isReadOnly, isInvalid },
    styles,
  } = useDatePicker()

  return (
    <IconButton
      aria-invalid={isInvalid}
      onClick={onOpen}
      variant="inputAttached"
      aria-label={calendarButtonAria}
      icon={<BxCalendar />}
      isActive={isOpen}
      isDisabled={isDisabled || isReadOnly}
      sx={styles.button}
    />
  )
}
