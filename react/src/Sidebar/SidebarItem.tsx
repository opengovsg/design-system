import { forwardRef, useMemo } from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  StackProps,
  Text,
  VStack,
} from '@chakra-ui/react'
import { dataAttr, mergeWith } from '@chakra-ui/utils'

import { Button } from '..'

import { useSidebarStyles } from './Sidebar'

export type SidebarItem = {
  activeId?: string
  id?: string
  label: string
  icon?: JSX.Element
  subItems?: SidebarItem[]
}

export interface SidebarItemProps extends SidebarItem, StackProps {
  nested?: boolean
}

export const SidebarItem = forwardRef<any, SidebarItemProps>(
  (
    { activeId, id, label, icon, subItems, as, nested, ...stackProps },
    ref,
  ): JSX.Element => {
    const styles = useSidebarStyles()

    const isActive = useMemo(() => {
      return !!activeId && activeId === id
    }, [activeId, id])

    return (
      <VStack __css={styles.container} align="flex-start" {...stackProps}>
        {!subItems || subItems?.length == 0 ? (
          <Button
            leftIcon={icon}
            __css={mergeWith(
              styles.item,
              nested ? styles.child : styles.parent,
            )}
            data-active={dataAttr(isActive)}
          >
            {label}
          </Button>
        ) : (
          <Accordion variant="sidebar" colorScheme="main" allowToggle>
            <AccordionItem>
              <AccordionButton borderLeftWidth={nested ? '2px' : undefined}>
                <Flex gap="0.5rem">
                  {icon}
                  <Text>{label}</Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                {subItems.map((item) => {
                  return (
                    <SidebarItem
                      nested
                      key={item.label}
                      activeId={activeId}
                      {...item}
                    />
                  )
                })}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        )}
      </VStack>
    )
  },
)
