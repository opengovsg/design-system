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
import { cloneDeep, mergeWith } from 'lodash'

import { useSidebarStyles } from './Sidebar'
import { SidebarItemType } from './types'

export interface NestedSidebarItemProps extends SidebarItemType {
  /**
   * Whether the item is the root item of the sidebar. Determines styling.
   */
  root?: boolean
  containerProps?: AccordionProps
}

export const NestedSidebarItem: FC<
  PropsWithChildren<NestedSidebarItemProps>
> = ({ icon, label, containerProps, root, children }) => {
  const styles = useSidebarStyles()

  const itemStyles = useMemo(() => {
    return mergeWith(
      cloneDeep(styles.item),
      cloneDeep(root ? styles.parent : styles.child),
    )
  }, [root, styles.child, styles.item, styles.parent])

  console.log(root, itemStyles)

  return (
    <Accordion
      variant="sidebar"
      colorScheme="main"
      allowToggle
      {...containerProps}
    >
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
