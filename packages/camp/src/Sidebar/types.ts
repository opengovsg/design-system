import type { PropsWithChildren } from 'react'
import { ChakraProps, IconProps } from '@chakra-ui/react'

export type BaseSidebarItemProps = PropsWithChildren<{
  icon?: React.ElementType
  iconProps?: IconProps
}> &
  ChakraProps
