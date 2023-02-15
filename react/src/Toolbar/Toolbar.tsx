import { PropsWithChildren } from 'react'
import {
  Box,
  BoxProps,
  createStylesContext,
  Flex,
  ThemingProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import { Button } from '~/Button'
import { IconButton } from '~/IconButton'

const [ToolbarStylesProvider, useToolbarStyles] = createStylesContext('Toolbar')

export { useToolbarStyles }

export interface ToolbarProps extends PropsWithChildren, BoxProps {
  colorScheme: ThemingProps<'Toolbar'>['colorScheme']
}

/**
 * Container for the toolbar.
 */
export const Toolbar = ({ children, ...props }: ToolbarProps): JSX.Element => {
  const styles = useMultiStyleConfig('Toolbar', props)
  return (
    <ToolbarStylesProvider value={styles}>
      <Box __css={styles.container} {...props}>
        {children}
      </Box>
    </ToolbarStylesProvider>
  )
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
