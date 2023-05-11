import type { PropsWithChildren } from 'react'
import { IconProps } from '@chakra-ui/react'

export type BaseSidebarItemProps = PropsWithChildren<{
  icon?: React.ElementType
  iconProps?: IconProps
}>
