import type { AccordionProps } from '@chakra-ui/react'

import type { ButtonProps } from '~/Button'

export type BaseSidebarItem = {
  label: string
  icon?: JSX.Element
}

export interface SidebarChildItem extends BaseSidebarItem {
  props?: ButtonProps
}

export interface SidebarNestableItem extends BaseSidebarItem {
  subItems: SidebarItemType[]
  props?: AccordionProps
}

export type SidebarItemType = SidebarNestableItem | SidebarChildItem
