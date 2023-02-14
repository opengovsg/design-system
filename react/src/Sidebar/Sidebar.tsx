import { FC, PropsWithChildren, useMemo } from 'react'
import { StackProps, useMultiStyleConfig, VStack } from '@chakra-ui/react'

import { NestedSidebarItem } from './NestedSidebarItem'
import { SidebarItem } from './SidebarItem'
import { SidebarStylesProvider } from './SidebarStylesContext'
import type { SidebarItemType, SidebarNestableItem } from './types'

export interface SidebarProps {
  items: SidebarItemType[]
}

const isNestableItem = (item: SidebarItemType): item is SidebarNestableItem => {
  return 'subItems' in item
}

// Generate recursive sidebar items if nested
const generateSidebarItems = (
  items: SidebarItemType[],
  root?: boolean,
): JSX.Element[] => {
  return items.map((item, index) => {
    if (isNestableItem(item)) {
      return (
        <NestedSidebarItem
          root={root}
          key={index}
          label={item.label}
          icon={item.icon}
          {...item.props}
        >
          {generateSidebarItems(item.subItems, false)}
        </NestedSidebarItem>
      )
    }
    const { props, ...rest } = item
    return <SidebarItem root={root} key={index} {...rest} {...props} />
  })
}

const SidebarContainer: FC<PropsWithChildren<StackProps>> = ({
  children,
  ...props
}) => {
  const styles = useMultiStyleConfig('Sidebar', {})
  return (
    <SidebarStylesProvider value={styles}>
      <VStack align="flex-start" spacing={0} {...props}>
        {children}
      </VStack>
    </SidebarStylesProvider>
  )
}

export const Sidebar = ({ items }: SidebarProps): JSX.Element => {
  const sidebarItems = useMemo(() => generateSidebarItems(items, true), [items])
  return <SidebarContainer>{sidebarItems}</SidebarContainer>
}

Sidebar.Container = SidebarContainer
Sidebar.Container.displayName = 'Sidebar.Container'
Sidebar.Item = SidebarItem
Sidebar.Item.displayName = 'Sidebar.Item'
Sidebar.NestedItem = NestedSidebarItem
Sidebar.NestedItem.displayName = 'Sidebar.NestedItem'
