import {
  CloseButtonProps,
  ModalCloseButton as ChakraModalCloseButton,
} from '@chakra-ui/react'
import { BxX } from '~/icons'

export type ModalCloseButtonProps = CloseButtonProps

export const ModalCloseButton = ({
  children = <BxX fontSize="2rem" />,
  ...props
}: ModalCloseButtonProps): JSX.Element => {
  return (
    <ChakraModalCloseButton variant="clear" colorScheme="neutral" {...props}>
      {children}
    </ChakraModalCloseButton>
  )
}
