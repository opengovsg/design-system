import { DatePickerContentBase } from '~/DatePicker/components/DatePickerContentBase'

import { useDateRangePicker } from '../DateRangePickerContext'

export const DateRangePickerContent = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const {
    isMobile,
    disclosureProps: { isOpen, onClose },
    initialFocusRef,
    styles,
  } = useDateRangePicker()

  return (
    <DatePickerContentBase
      isMobile={isMobile}
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialFocusRef}
      headerStyles={styles.header}
    >
      {children}
    </DatePickerContentBase>
  )
}
