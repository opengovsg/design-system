import { FC, PropsWithChildren, useMemo } from 'react'
import { StackProps, useMultiStyleConfig, VStack } from '@chakra-ui/react'
import { merge } from 'lodash'

import { NestedSidebarItem } from './NestedSidebarItem'
import { SidebarProvider } from './SidebarContext'
import { SidebarItem } from './SidebarItem'
import { SidebarStylesProvider } from './SidebarStylesContext'
import type { SidebarItemType, SidebarNestableItem } from './types'

export interface SidebarProps {
  items: SidebarItemType[]
  collapsed?: boolean
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

interface SidebarContainerProps extends StackProps {
  /**
   * If true, the sidebar will be collapsed and the label text will be hidden.
   * @note If value is not `undefined`, the label text will be clamped to a single line for smoother expansion animation.
   */
  collapsed?: boolean
}

const SidebarContainer: FC<PropsWithChildren<SidebarContainerProps>> = ({
  children,
  collapsed,
  sx,
  ...props
}) => {
  const styles = useMultiStyleConfig('Sidebar', {})

  return (
    <SidebarProvider collapsed={collapsed}>
      {({ containerStyles }) => (
        <SidebarStylesProvider value={styles}>
          <VStack
            align="flex-start"
            spacing={0}
            sx={merge({}, containerStyles, sx)}
            {...props}
          >
            {children}
          </VStack>
        </SidebarStylesProvider>
      )}
    </SidebarProvider>
  )
}

export const Sidebar = ({ items, collapsed }: SidebarProps): JSX.Element => {
  const sidebarItems = useMemo(() => generateSidebarItems(items, true), [items])
  return (
    <SidebarContainer collapsed={collapsed}>{sidebarItems}</SidebarContainer>
  )
}

Sidebar.Container = SidebarContainer
Sidebar.Container.displayName = 'Sidebar.Container'
Sidebar.Item = SidebarItem
Sidebar.Item.displayName = 'Sidebar.Item'
Sidebar.NestedItem = NestedSidebarItem
Sidebar.NestedItem.displayName = 'Sidebar.NestedItem'
