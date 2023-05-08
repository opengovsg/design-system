import { useMemo } from 'react'

import { SidebarChildItem } from './SidebarChildItem'
import { SidebarContainer } from './SidebarContainer'
import { SidebarParentItem } from './SidebarParentItem'
import type { BaseSidebarItemProps } from './types'

type GeneratedItemBase = BaseSidebarItemProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any
}
type GeneratedItemChild = GeneratedItemBase
type GeneratedItemParent = GeneratedItemBase & {
  subItems: (GeneratedItemParent | GeneratedItemChild)[]
  root?: boolean
}

type GeneratedSidebarItem = GeneratedItemParent | GeneratedItemChild

export interface SidebarProps {
  items: GeneratedSidebarItem[]
}

const isNestableItem = (
  item: GeneratedSidebarItem,
): item is GeneratedItemParent => {
  return 'subItems' in item
}

// Generate recursive sidebar items if nested
export const generateSidebarItems = (
  items: GeneratedSidebarItem[],
  root?: boolean,
): JSX.Element[] => {
  return items.map((item, index) => {
    if (isNestableItem(item)) {
      return (
        <SidebarParentItem
          root={root}
          key={index}
          label={item.label}
          icon={item.icon}
          {...item.props}
        >
          {generateSidebarItems(item.subItems, root)}
        </SidebarParentItem>
      )
    }

    const { props, ...rest } = item
    return <SidebarChildItem key={index} {...rest} {...props} />
  })
}

export const Sidebar = ({ items }: SidebarProps): JSX.Element => {
  const sidebarItems = useMemo(() => generateSidebarItems(items, true), [items])

  return <SidebarContainer>{sidebarItems}</SidebarContainer>
}
