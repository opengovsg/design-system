import { createStylesContext, Flex } from '@chakra-ui/react'

import { Button } from '~/Button'
import { IconButton } from '~/IconButton'

const [ToolbarStylesProvider, useToolbarStyles] = createStylesContext('Toolbar')

export { useToolbarStyles }

export interface ToolbarProps {}

/**
 * Container for the toolbar.
 */
export const Toolbar = ({}: ToolbarProps): JSX.Element => {
  return <Flex></Flex>
}

/**
 * Component to group togglable buttons to allow selection of only one in a group.
 */
export const ToolbarToggleGroup = () => {
  return <Flex></Flex>
}

export const ToolbarGroup = () => {
  return <Flex></Flex>
}

export const ToolbarToggleButton = () => {
  return <Flex></Flex>
}

export const ToolbarDivider = () => {
  return <Flex></Flex>
}

export const ToolbarButton = Button
export const ToolbarIconButton = IconButton
