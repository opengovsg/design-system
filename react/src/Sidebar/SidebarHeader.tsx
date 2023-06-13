import { Box, chakra, forwardRef, Icon } from '@chakra-ui/react'

import { useSidebarStyles } from './SidebarContext'
import type { BaseSidebarItemProps } from './types'

export type SidebarHeaderProps = BaseSidebarItemProps

export const SidebarHeader = forwardRef<SidebarHeaderProps, 'div'>(
  ({ children, icon, iconProps, ...props }, ref): JSX.Element => {
    const styles = useSidebarStyles()

    return (
      <chakra.li listStyleType="none">
        <Box as="h2" __css={styles.header} ref={ref} {...props}>
          {icon ? <Icon as={icon} __css={styles.icon} {...iconProps} /> : null}
          {children}
        </Box>
      </chakra.li>
    )
  },
)

SidebarHeader.displayName = 'SidebarHeader'
