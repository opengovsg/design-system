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
  ThemingProps,
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
  containerStyles?: SystemStyleObject
  size: ThemingProps<'DatePicker'>['size']
}

export const DatePickerContentBase = ({
  children,
  isMobile,
  isOpen,
  onClose,
  headerStyles,
  containerStyles,
  initialFocusRef,
  size,
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
        <DrawerContent sx={containerStyles} maxH="100%" overflow="auto">
          <DrawerCloseButton
            size="sm"
            right="0.625rem"
            top="0.375rem"
            colorScheme="neutral"
          />
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
      <PopoverContent
        borderRadius="base"
        w="unset"
        maxW="100vw"
        sx={containerStyles}
      >
        <ReactFocusLock>
          <PopoverHeader sx={headerStyles}>
            Select a date
            <PopoverCloseButton mr="-0.875rem" size={size} position="initial" />
          </PopoverHeader>
          <PopoverBody p={0}>{children}</PopoverBody>
        </ReactFocusLock>
      </PopoverContent>
    </Portal>
  )
}
