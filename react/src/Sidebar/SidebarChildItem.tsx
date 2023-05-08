import { forwardRef, ListItem } from '@chakra-ui/react'

import type { SidebarChildItemProps } from './types'

export const SidebarChildItem = forwardRef<SidebarChildItemProps, 'li'>(
  ({ label, icon, ...props }, ref): JSX.Element => {
    return (
      <ListItem ref={ref} {...props}>
        {label}
      </ListItem>
    )
  },
)
