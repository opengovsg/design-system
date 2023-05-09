import { useMemo } from 'react'

import { SidebarContainer } from './SidebarContainer'
import { SidebarItem } from './SidebarItem'
import { SidebarList } from './SidebarList'
import type { BaseSidebarItemProps } from './types'

type GeneratedBase = BaseSidebarItemProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any
}
type GeneratedItem = GeneratedBase
type GeneratedList = Omit<GeneratedBase, 'children'> & {
  label: string
  subItems: (GeneratedList | GeneratedItem)[]
  root?: boolean
}

type GeneratedSidebarItem = GeneratedList | GeneratedItem

export interface SidebarProps {
  items: GeneratedSidebarItem[]
}

const isNestableItem = (item: GeneratedSidebarItem): item is GeneratedList => {
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
        <SidebarList
          root={root}
          key={index}
          label={item.label}
          icon={item.icon}
          {...item.props}
        >
          {generateSidebarItems(item.subItems, root)}
        </SidebarList>
      )
    }

    const { props, ...rest } = item
    return <SidebarItem key={index} {...rest} {...props} />
  })
}

export const Sidebar = ({ items }: SidebarProps): JSX.Element => {
  const sidebarItems = useMemo(() => generateSidebarItems(items, true), [items])

  return <SidebarContainer>{sidebarItems}</SidebarContainer>
}
