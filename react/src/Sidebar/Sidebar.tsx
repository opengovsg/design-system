import { useMemo } from 'react'
import { type ThemingProps } from '@chakra-ui/react'

import { SidebarContainer } from './SidebarContainer'
import { SidebarItem, type SidebarItemProps } from './SidebarItem'
import { SidebarList, type SidebarListProps } from './SidebarList'
import type { BaseSidebarItemProps } from './types'

interface GeneratedBase
  extends BaseSidebarItemProps,
    Pick<SidebarItemProps, 'isActive'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any
}
interface GeneratedItem extends GeneratedBase, SidebarItemProps {}
interface GeneratedList
  extends Omit<GeneratedBase, 'children'>,
    SidebarListProps {
  subItems: (GeneratedList | GeneratedItem)[]
}

type GeneratedSidebarItem = GeneratedList | GeneratedItem

export interface SidebarProps extends ThemingProps<'Sidebar'> {
  items: GeneratedSidebarItem[]
}

const isNestableItem = (item: GeneratedSidebarItem): item is GeneratedList => {
  return 'subItems' in item
}

// Generate recursive sidebar items if nested
export const generateSidebarItems = (
  items: GeneratedSidebarItem[],
): JSX.Element[] => {
  return items.map((item, index) => {
    if (isNestableItem(item)) {
      const { label, icon, subItems, props, ...rest } = item
      return (
        <SidebarList key={index} label={label} icon={icon} {...props} {...rest}>
          {generateSidebarItems(subItems)}
        </SidebarList>
      )
    }

    const { props, ...rest } = item
    return <SidebarItem key={index} {...rest} {...props} />
  })
}

export const Sidebar = ({ items, ...rest }: SidebarProps): JSX.Element => {
  const sidebarItems = useMemo(() => generateSidebarItems(items), [items])

  return <SidebarContainer {...rest}>{sidebarItems}</SidebarContainer>
}
