import type { PropsWithChildren } from 'react'

export type BaseSidebarItemProps = PropsWithChildren<{
  icon?: JSX.Element
}>

export type SidebarItemProps = BaseSidebarItemProps

export interface SidebarListProps extends BaseSidebarItemProps {
  label: string
  root?: boolean
}
