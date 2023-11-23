import { PropsWithChildren, useMemo } from 'react'
import { Flex, Popover, PopoverAnchor } from '@chakra-ui/react'

import { useDatePicker } from '../DatePickerContext'

import { DatePickerInput } from './DatePickerInput'
import { DatePickerOverlay } from './DatePickerOverlay'

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
