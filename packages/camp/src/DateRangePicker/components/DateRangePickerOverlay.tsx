import { Box } from '@chakra-ui/react'

import { useDateRangePicker } from '../DateRangePickerContext'

export const DateRangePickerOverlay = () => {
  const {
    disclosureProps: { isOpen },
  } = useDateRangePicker()

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
      zIndex={1}
    />
  )
}
