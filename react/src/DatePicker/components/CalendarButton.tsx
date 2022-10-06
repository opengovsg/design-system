import { IconButton } from '~/IconButton'
import { BxCalendar } from '~/icons'

import { useDatePicker } from '../DatePickerContext'

export const CalendarButton = (): JSX.Element => {
  const {
    disclosureProps: { onOpen, isOpen },
    colorScheme,
    calendarButtonAria,
    fcProps: { isDisabled, isReadOnly },
  } = useDatePicker()
  return (
    <IconButton
      onClick={onOpen}
      colorScheme={colorScheme}
      aria-label={calendarButtonAria}
      icon={<BxCalendar />}
      variant="inputAttached"
      borderRadius={0}
      isActive={isOpen}
      isDisabled={isDisabled || isReadOnly}
    />
  )
}
