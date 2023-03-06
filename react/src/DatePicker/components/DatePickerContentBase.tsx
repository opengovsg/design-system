// Pure component for reusability
import ReactFocusLock from 'react-focus-lock'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  Portal,
  SystemStyleObject,
} from '@chakra-ui/react'

import { DrawerCloseButton } from '~/Drawer'
import { PopoverCloseButton } from '~/Popover'

interface DatePickerContentBaseProps {
  children: React.ReactNode
  isMobile: boolean
  isOpen: boolean
  onClose: () => void
  initialFocusRef: React.RefObject<HTMLElement>
  headerStyles?: SystemStyleObject
}

export const DatePickerContentBase = ({
  children,
  isMobile,
  isOpen,
  onClose,
  headerStyles,
  initialFocusRef,
}: DatePickerContentBaseProps): JSX.Element => {
  if (isMobile) {
    return (
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        initialFocusRef={initialFocusRef}
      >
        <DrawerOverlay />
        <DrawerContent maxH="100%" overflow="auto">
          <DrawerCloseButton colorScheme="neutral" />
          <DrawerHeader sx={headerStyles} borderBottomWidth="1px">
            Select a date
          </DrawerHeader>
          {children}
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Portal>
      <PopoverContent borderRadius="base" w="unset" maxW="100vw" bg="white">
        <ReactFocusLock>
          <PopoverHeader sx={headerStyles}>
            Select a date
            <PopoverCloseButton position="initial" />
          </PopoverHeader>
          <PopoverBody p={0}>{children}</PopoverBody>
        </ReactFocusLock>
      </PopoverContent>
    </Portal>
  )
}
