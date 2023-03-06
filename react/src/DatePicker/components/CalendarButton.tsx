import { Icon } from '@chakra-ui/react'

import { IconButton } from '~/IconButton'
import { BxCalendar } from '~/icons'

import { useDatePicker } from '../DatePickerContext'

export const CalendarButton = (): JSX.Element => {
  const {
    disclosureProps: { onOpen, isOpen },
    calendarButtonAria,
    fcProps: { isDisabled, isReadOnly, isInvalid },
    size,
    styles,
  } = useDatePicker()

  return (
    <IconButton
      size={size}
      aria-invalid={isInvalid}
      onClick={onOpen}
      variant="inputAttached"
      aria-label={calendarButtonAria}
      icon={<Icon as={BxCalendar} sx={styles.inputButton} />}
      isActive={isOpen}
      isDisabled={isDisabled || isReadOnly}
    />
  )
}
