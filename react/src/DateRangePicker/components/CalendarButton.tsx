import { Icon } from '@chakra-ui/react'

import { IconButton } from '~/IconButton'
import { BxCalendar } from '~/icons'

import { useDateRangePicker } from '../DateRangePickerContext'

export const CalendarButton = (): JSX.Element => {
  const {
    disclosureProps: { onOpen, isOpen },
    calendarButtonAria,
    fcProps: { isDisabled, isReadOnly, isInvalid },
    size,
    styles,
  } = useDateRangePicker()

  return (
    <IconButton
      data-group
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
