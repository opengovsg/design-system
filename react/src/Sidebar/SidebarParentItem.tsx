import { PropsWithChildren } from 'react'
import { forwardRef, ListItem, UnorderedList } from '@chakra-ui/react'

import type { SidebarParentItemProps } from './types'

export const SidebarParentItem = forwardRef<
  PropsWithChildren<SidebarParentItemProps>,
  'li'
>(({ label, children, icon, ...props }, ref): JSX.Element => {
  return (
    <ListItem ref={ref} {...props}>
      {label}
      <UnorderedList>{children}</UnorderedList>
    </ListItem>
  )
})
