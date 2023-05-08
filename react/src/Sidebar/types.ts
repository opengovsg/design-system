import type { ListItemProps } from '@chakra-ui/react'

export type BaseSidebarItemProps = {
  label: string
  icon?: JSX.Element
}

export interface SidebarChildItemProps
  extends BaseSidebarItemProps,
    ListItemProps {}

export interface SidebarParentItemProps
  extends BaseSidebarItemProps,
    ListItemProps {
  root?: boolean
}
