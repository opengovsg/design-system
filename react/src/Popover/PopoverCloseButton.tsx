import {
  CloseButtonProps,
  PopoverCloseButton as ChakraPopoverCloseButton,
} from '@chakra-ui/react'

import { BxX } from '~/icons'

export type PopoverCloseButtonProps = CloseButtonProps

export const PopoverCloseButton = ({
  children = <BxX fontSize="1.25rem" />,
  ...props
}: PopoverCloseButtonProps): JSX.Element => {
  return (
    <ChakraPopoverCloseButton variant="clear" colorScheme="neutral" {...props}>
      {children}
    </ChakraPopoverCloseButton>
  )
}
