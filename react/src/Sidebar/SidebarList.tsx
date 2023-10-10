import { FC, type PropsWithChildren, useCallback, useMemo } from 'react'
import {
  Box,
  chakra,
  Collapse,
  forwardRef,
  HTMLChakraProps,
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
  /** Whether the element is currently active */
  isActive?: boolean | (() => boolean)
  /** Callback invoked when section is clicked */
  onClick?: () => void
}

type SectionWrapperProps = HTMLChakraProps<'button'> &
  HTMLChakraProps<'div'> & { onlyCaretToggle: boolean }

const SectionWrapper: FC<PropsWithChildren & SectionWrapperProps> = ({
  children,
  onlyCaretToggle,
  ...props
}) => {
  if (onlyCaretToggle) return <chakra.div {...props}>{children}</chakra.div>

  return (
    <chakra.button {...props} type="button">
      {children}
    </chakra.button>
  )
}
const ToggleChevronWrapper: FC<PropsWithChildren & SectionWrapperProps> = ({
  children,
  onlyCaretToggle,
  ...props
}) => {
  if (onlyCaretToggle)
    return (
      <chakra.button {...props} type="button">
        {children}
      </chakra.button>
    )

  return <chakra.div {...props}>{children}</chakra.div>
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
      onClick,
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
      if (!onlyCaretToggle) {
        onToggle()
      }
      onClick?.()
    }, [onClick, onToggle, onlyCaretToggle])

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
        <Box>
          <SectionWrapper
            __css={itemCss}
            data-expanded={dataAttr(isOpen)}
            data-active={dataAttr(dataActive)}
            onClick={handleExpandSection}
            onlyCaretToggle={onlyCaretToggle}
          >
            <chakra.span flex={1} __css={styles.label}>
              {icon ? (
                <Icon as={icon} __css={styles.icon} {...iconProps} />
              ) : null}
              {label}
            </chakra.span>

            <ToggleChevronWrapper
              layerStyle="focusRing.default"
              aria-label={onlyCaretToggle ? 'Toggle section' : undefined}
              onClick={onToggle}
              display="flex"
              outline="none"
              onlyCaretToggle={onlyCaretToggle}
            >
              <ToggleChevron
                reduceMotion={reduceMotion}
                isOpen={isOpen}
                styles={styles.icon}
              />
            </ToggleChevronWrapper>
          </SectionWrapper>
          <SidebarNestProvider nested>
            <SidebarSection isOpen={isOpen}>{children}</SidebarSection>
          </SidebarNestProvider>
        </Box>
      </chakra.li>
    )
  },
)

SidebarList.displayName = 'SidebarList'
