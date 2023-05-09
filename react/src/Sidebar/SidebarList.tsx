import { type PropsWithChildren, useCallback, useMemo } from 'react'
import {
  chakra,
  Collapse,
  Flex,
  forwardRef,
  Icon,
  useDisclosure,
  type UseDisclosureReturn,
} from '@chakra-ui/react'
import { dataAttr, isFunction } from '@chakra-ui/utils'
import { merge } from 'lodash'

import { ToggleChevron } from '~/icons'

import {
  SidebarNestProvider,
  useSidebarContext,
  useSidebarStyles,
} from './SidebarContext'
import type { BaseSidebarItemProps } from './types'

const SidebarSection = ({
  children,
  isOpen,
}: PropsWithChildren<Pick<UseDisclosureReturn, 'isOpen'>>) => {
  const { reduceMotion } = useSidebarContext()
  const styles = useSidebarStyles()

  const child = <chakra.ul __css={styles.nest}>{children}</chakra.ul>

  if (reduceMotion) return child

  return <Collapse in={isOpen}>{child}</Collapse>
}

export interface SidebarListProps extends BaseSidebarItemProps {
  label: React.ReactNode
  /** Controlled state for expansion of section */
  isExpanded?: boolean
  /** Uncontrolled state for expansion of section */
  defaultIsExpanded?: boolean
  /** Controlled callback for when section's expansion state changes */
  onExpand?: (nextState: boolean) => void

  /** Only allow toggling of expand state when clicking the caret.
   * Could be useful if user wants to use the list item as a link.
   *
   * @default false
   */
  onlyCaretToggle?: boolean
  isActive?: boolean | (() => boolean)
}

export const SidebarList = forwardRef<
  PropsWithChildren<SidebarListProps>,
  'li'
>(
  (
    {
      label,
      children,
      icon,
      iconProps,
      isActive,
      defaultIsExpanded,
      isExpanded: isExpandedProp,
      onExpand: onExpandProp,
      onlyCaretToggle = false,
      ...props
    },
    ref,
  ): JSX.Element => {
    const styles = useSidebarStyles()
    const { reduceMotion } = useSidebarContext()

    const { isOpen, onToggle } = useDisclosure({
      defaultIsOpen: defaultIsExpanded,
      isOpen: isExpandedProp,
      onClose: () => onExpandProp?.(false),
      onOpen: () => onExpandProp?.(true),
    })

    const handleExpandSection = useCallback(() => {
      if (onlyCaretToggle) return
      return onToggle()
    }, [onToggle, onlyCaretToggle])

    const dataActive = useMemo(() => {
      if (isFunction(isActive)) {
        return isActive()
      }
      return isActive
    }, [isActive])

    const itemCss = useMemo(() => {
      const mergedStyles = merge({}, styles.item, styles.parent)
      if (onlyCaretToggle) return mergedStyles
      return merge({}, mergedStyles, { cursor: 'pointer' })
    }, [onlyCaretToggle, styles.item, styles.parent])

    return (
      <chakra.li __css={styles.list} pl={0} ref={ref} {...props}>
        <Flex
          __css={itemCss}
          data-expanded={dataAttr(isOpen)}
          data-active={dataAttr(dataActive)}
          onClick={handleExpandSection}
        >
          <chakra.span flex={1} __css={styles.label}>
            {icon ? (
              <Icon as={icon} __css={styles.icon} {...iconProps} />
            ) : null}
            {label}
          </chakra.span>
          <ToggleChevron
            reduceMotion={reduceMotion}
            isOpen={isOpen}
            styles={styles.icon}
            onClick={onToggle}
          />
        </Flex>
        <SidebarNestProvider nested>
          <SidebarSection isOpen={isOpen}>{children}</SidebarSection>
        </SidebarNestProvider>
      </chakra.li>
    )
  },
)

SidebarList.displayName = 'SidebarList'
