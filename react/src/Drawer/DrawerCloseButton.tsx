import {
  CloseButtonProps,
  DrawerCloseButton as ChakraDrawerCloseButton,
} from '@chakra-ui/react'

import { BxX } from '~/icons'

export type DrawerCloseButtonProps = CloseButtonProps

export const DrawerCloseButton = ({
  children = <BxX fontSize="1.25rem" />,
  ...props
}: DrawerCloseButtonProps): JSX.Element => {
  return (
    <ChakraDrawerCloseButton variant="clear" colorScheme="neutral" {...props}>
      {children}
    </ChakraDrawerCloseButton>
  )
}
