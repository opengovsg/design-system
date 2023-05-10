import { useMemo } from 'react'
import { Box, chakra, forwardRef, Icon } from '@chakra-ui/react'
import { dataAttr, isFunction } from '@chakra-ui/utils'
import { merge } from 'lodash'

import { useSidebarNestContext, useSidebarStyles } from './SidebarContext'
import type { BaseSidebarItemProps } from './types'

export interface SidebarItemProps extends BaseSidebarItemProps {
  isActive?: boolean | (() => boolean)
}

export const SidebarItem = forwardRef<SidebarItemProps, 'li'>(
  ({ children, icon, iconProps, isActive, ...props }, ref): JSX.Element => {
    const styles = useSidebarStyles()
    const { nested } = useSidebarNestContext()
    const css = useMemo(() => {
      if (!nested) {
        return merge({}, styles.item, styles.label, styles.parent)
      }
      return merge({}, styles.item, styles.label, styles.child)
    }, [nested, styles.child, styles.item, styles.label, styles.parent])

    const dataActive = useMemo(() => {
      if (isFunction(isActive)) {
        return isActive()
      }
      return isActive
    }, [isActive])

    return (
      <chakra.li listStyleType="none">
        <Box
          __css={css}
          ref={ref}
          {...props}
          data-active={dataAttr(dataActive)}
        >
          {icon ? <Icon as={icon} __css={styles.icon} {...iconProps} /> : null}
          {children}
        </Box>
      </chakra.li>
    )
  },
)

SidebarItem.displayName = 'SidebarItem'
