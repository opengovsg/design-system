import type { PropsWithChildren } from 'react'
import { forwardRef, ListItem, UnorderedList } from '@chakra-ui/react'

import type { SidebarListProps } from './types'

export const SidebarList = forwardRef<
  PropsWithChildren<SidebarListProps>,
  'li'
>(({ label, children, icon, ...props }, ref): JSX.Element => {
  return (
    <ListItem ref={ref} {...props}>
      {label}
      <UnorderedList>{children}</UnorderedList>
    </ListItem>
  )
})

SidebarList.displayName = 'SidebarList'
