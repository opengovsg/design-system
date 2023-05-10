import { useMemo } from 'react'
import { type ThemingProps } from '@chakra-ui/react'

import { SidebarContainer } from './SidebarContainer'
import { SidebarHeader, type SidebarHeaderProps } from './SidebarHeader'
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
interface GeneratedHeader extends SidebarHeaderProps {
  type: 'header'
}
interface GeneratedList
  extends Omit<GeneratedBase, 'children'>,
    SidebarListProps {
  subItems: (GeneratedList | GeneratedItem | GeneratedHeader)[]
}

type GeneratedSidebarItem = GeneratedList | GeneratedItem | GeneratedHeader

export interface SidebarProps extends ThemingProps<'Sidebar'> {
  items: GeneratedSidebarItem[]
}

const isNestableItem = (item: GeneratedSidebarItem): item is GeneratedList => {
  return 'subItems' in item
}
const isHeaderItem = (item: GeneratedSidebarItem): item is GeneratedHeader => {
  return 'type' in item && item.type === 'header'
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
    if (isHeaderItem(item)) {
      return <SidebarHeader key={index} {...item} />
    }

    const { props, ...rest } = item
    return <SidebarItem key={index} {...rest} {...props} />
  })
}

export const Sidebar = ({ items, ...rest }: SidebarProps): JSX.Element => {
  const sidebarItems = useMemo(() => generateSidebarItems(items), [items])

  return <SidebarContainer {...rest}>{sidebarItems}</SidebarContainer>
}
