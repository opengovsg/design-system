import { useMemo } from 'react'
import { forwardRef } from '@chakra-ui/react'
import { dataAttr } from '@chakra-ui/utils'
import { cloneDeep, mergeWith } from 'lodash'

import { Button, ButtonProps } from '~/Button'

import { useSidebarStyles } from './Sidebar'
import { BaseSidebarItem } from './types'

export interface SidebarItemProps extends BaseSidebarItem, ButtonProps {
  isActive?: boolean
  root?: boolean
}

export const SidebarItem = forwardRef<SidebarItemProps, 'button'>(
  ({ isActive, label, icon, as, root, ...props }, ref): JSX.Element => {
    const styles = useSidebarStyles()

    const itemStyles = useMemo(() => {
      return mergeWith(
        cloneDeep(styles.item),
        cloneDeep(root ? styles.parent : styles.child),
      )
    }, [root, styles.child, styles.item, styles.parent])

    return (
      <Button
        ref={ref}
        leftIcon={icon}
        __css={itemStyles}
        justifyContent="initial"
        data-active={dataAttr(isActive)}
        as={as}
        {...props}
      >
        {label}
      </Button>
    )
  },
)
