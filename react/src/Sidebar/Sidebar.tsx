import { FC, PropsWithChildren, useMemo } from 'react'
import {
  createStylesContext,
  StackProps,
  useMultiStyleConfig,
  VStack,
} from '@chakra-ui/react'

import { NestedSidebarItem } from './NestedSidebarItem'
import { SidebarItem } from './SidebarItem'
import { SidebarItemType } from './types'

const [SidebarStylesProvider, useSidebarStyles] = createStylesContext('Sidebar')

export { useSidebarStyles }

type SidebarNestableItem = SidebarItemType & {
  subItems?: SidebarNestableItem[]
}
export interface SidebarProps {
  items: SidebarNestableItem[]
}

// Generate recursive sidebar items if nested
const generateSidebarItems = (
  items: SidebarNestableItem[],
  root?: boolean,
): JSX.Element[] => {
  return items.map((item, index) => {
    if (item.subItems) {
      return (
        <NestedSidebarItem
          root={root}
          key={index}
          label={item.label}
          icon={item.icon}
        >
          {generateSidebarItems(item.subItems, false)}
        </NestedSidebarItem>
      )
    }
    return <SidebarItem root={root} key={index} {...item} />
  })
}

export const Sidebar = ({ items }: SidebarProps): JSX.Element => {
  const sidebarItems = useMemo(() => generateSidebarItems(items, true), [items])
  return <SidebarContainer>{sidebarItems}</SidebarContainer>
}

export const SidebarContainer: FC<PropsWithChildren<StackProps>> = ({
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

Sidebar.Container = SidebarContainer
Sidebar.Container.displayName = 'Sidebar.Container'
Sidebar.Item = SidebarItem
Sidebar.Item.displayName = 'Sidebar.Item'
Sidebar.NestedItem = NestedSidebarItem
Sidebar.NestedItem.displayName = 'Sidebar.NestedItem'
