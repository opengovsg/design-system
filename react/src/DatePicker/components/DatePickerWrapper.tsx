import { PropsWithChildren, useMemo } from 'react'
import { Box, Flex, Popover, PopoverAnchor } from '@chakra-ui/react'

import { useDatePicker } from '../DatePickerContext'

import { DatePickerInput } from './DatePickerInput'

const DatePickerOverlay = () => {
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

export const DatePickerWrapper = ({ children }: PropsWithChildren) => {
  const {
    disclosureProps,
    initialFocusRef,
    closeCalendarOnChange,
    isMobile,
    inputElement,
  } = useDatePicker()

  const inputToRender = useMemo(() => {
    return inputElement ?? <DatePickerInput />
  }, [inputElement])

  if (isMobile) {
    return (
      <Flex>
        {inputToRender}
        {children}
      </Flex>
    )
  }

  return (
    <Flex>
      <Popover
        placement="bottom-start"
        isLazy
        initialFocusRef={initialFocusRef}
        closeOnBlur={closeCalendarOnChange}
        returnFocusOnClose={false}
        {...disclosureProps}
      >
        <PopoverAnchor>{inputToRender}</PopoverAnchor>
        {children}
      </Popover>
      <DatePickerOverlay />
    </Flex>
  )
}
