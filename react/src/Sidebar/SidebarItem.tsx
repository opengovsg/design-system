import { forwardRef, ListItem } from '@chakra-ui/react'

import type { SidebarItemProps } from './types'

export const SidebarItem = forwardRef<SidebarItemProps, 'li'>(
  ({ children, icon, ...props }, ref): JSX.Element => {
    return (
      <ListItem ref={ref} {...props}>
        {children}
      </ListItem>
    )
  },
)

SidebarItem.displayName = 'SidebarItem'
