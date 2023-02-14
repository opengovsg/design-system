import { FC, PropsWithChildren, useMemo } from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react'
import { merge } from 'lodash'

import { useSidebarStyles } from './SidebarStylesContext'
import { BaseSidebarItem } from './types'

export interface NestedSidebarItemProps extends BaseSidebarItem {
  /**
   * Whether the item is the root item of the sidebar. Determines styling.
   */
  root?: boolean
  props?: AccordionProps
}

export const NestedSidebarItem: FC<
  PropsWithChildren<NestedSidebarItemProps>
> = ({ icon, label, props, root, children }) => {
  const styles = useSidebarStyles()

  const itemStyles = useMemo(() => {
    return merge({}, styles.parent, root ? {} : styles.child, styles.item)
  }, [root, styles.child, styles.item, styles.parent])

  return (
    <Accordion variant="sidebar" colorScheme="main" allowToggle {...props}>
      <AccordionItem>
        <AccordionButton sx={itemStyles}>
          <Flex gap="0.5rem">
            {icon}
            <Text>{label}</Text>
          </Flex>
          <AccordionIcon ml="0.5rem" />
        </AccordionButton>
        <AccordionPanel>
          <VStack __css={styles.container} align="flex-start">
            {children}
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
