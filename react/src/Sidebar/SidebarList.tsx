import { PropsWithChildren } from 'react'
import { chakra, forwardRef } from '@chakra-ui/react'

import { SidebarNestProvider } from './SidebarNestContext'
import { useSidebarStyles } from './SidebarStyleProvider'
import type { SidebarListProps } from './types'

export const SidebarList = forwardRef<
  PropsWithChildren<SidebarListProps>,
  'li'
>(({ label, children, icon, ...props }, ref): JSX.Element => {
  const styles = useSidebarStyles()

  return (
    <chakra.li __css={styles.list} pl={0} ref={ref} {...props}>
      <chakra.span __css={styles.parent}>{label}</chakra.span>
      <SidebarNestProvider nested>
        <chakra.ul __css={styles.nest}>{children}</chakra.ul>
      </SidebarNestProvider>
    </chakra.li>
  )
})

SidebarList.displayName = 'SidebarList'
