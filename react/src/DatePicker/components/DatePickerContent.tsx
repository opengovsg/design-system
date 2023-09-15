import { useDatePicker } from '../DatePickerContext'

import { DatePickerContentBase } from './DatePickerContentBase'

export const DatePickerContent = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const {
    isMobile,
    disclosureProps: { isOpen, onClose },
    initialFocusRef,
    styles,
    size,
  } = useDatePicker()
  return (
    <DatePickerContentBase
      size={size}
      isMobile={isMobile}
      headerStyles={styles.header}
      containerStyles={styles.container}
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialFocusRef}
    >
      {children}
    </DatePickerContentBase>
  )
}
