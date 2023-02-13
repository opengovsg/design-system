import {
  createStylesContext,
  useMultiStyleConfig,
  VStack,
} from '@chakra-ui/react'

import { SidebarItem } from './SidebarItem'

const [SidebarStylesProvider, useSidebarStyles] = createStylesContext('Sidebar')

export { useSidebarStyles }

export interface SidebarProps {
  activeId?: string
  items: SidebarItem[]
}

export const Sidebar = ({ activeId, items }: SidebarProps): JSX.Element => {
  const styles = useMultiStyleConfig('Sidebar', {})
  return (
    <SidebarStylesProvider value={styles}>
      <VStack align="flex-start" spacing={0}>
        {items.map((item) => (
          <SidebarItem key={item.label} activeId={activeId} ml={0} {...item} />
        ))}
      </VStack>
    </SidebarStylesProvider>
  )
}
