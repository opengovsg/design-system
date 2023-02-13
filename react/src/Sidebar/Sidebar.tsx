import { useMemo } from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'

import { Link } from '..'

export interface SidebarProps {
  activeId?: string
  items: SidebarItem[]
}

export interface SidebarItem {
  activeId?: string
  id?: string
  label: string
  icon?: JSX.Element
  link?: string
  subItems?: SidebarItem[]
}

export const SidebarItem = ({
  activeId,
  id,
  label,
  icon,
  link,
  subItems,
}: SidebarItem): JSX.Element => {
  const isActive = useMemo(() => {
    return activeId && activeId === id
  }, [activeId, id])

  return (
    <VStack
      w="admin-settings-nav-width"
      minH="admin-content-min-height"
      spacing="1.5rem"
      align="center"
      borderRightWidth="1px"
      borderStyle="solid"
      borderColor="neutral.300"
    >
      {!subItems || subItems?.length == 0 ? (
        <HStack backgroundColor={isActive ? 'blue' : undefined}>
          {link ? (
            <Link href={link}>
              {icon}
              <Text>{label}</Text>
            </Link>
          ) : (
            <>
              {icon}
              <Text>{label}</Text>
            </>
          )}
        </HStack>
      ) : (
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box backgroundColor={isActive ? 'blue' : undefined}>
                {icon}
                <Text>{label}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {subItems.map((item) => {
                return (
                  <SidebarItem key={item.label} activeId={activeId} {...item} />
                )
              })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      )}
    </VStack>
  )
}

export const Sidebar = ({ activeId, items }: SidebarProps): JSX.Element => {
  return (
    <HStack minWidth="100%" align="stretch" spacing={0}>
      <Box
        minW="admin-settings-content-min-width"
        minH="admin-content-min-height"
        // backgroundColor="teal"
      >
        {items.map((item) => (
          <SidebarItem key={item.label} activeId={activeId} {...item} />
        ))}
      </Box>
    </HStack>
  )
}
