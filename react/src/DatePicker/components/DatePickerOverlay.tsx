import { Box } from '@chakra-ui/react'

import { useDatePicker } from '../DatePickerContext'

export const DatePickerOverlay = () => {
  const {
    disclosureProps: { isOpen },
  } = useDatePicker()

  return (
    <Box
      position="fixed"
      left="0px"
      top="0px"
      width="100vw"
      height="$100vh"
      display={isOpen ? 'block' : 'none'}
      aria-hidden
      bg="transparent"
    />
  )
}
