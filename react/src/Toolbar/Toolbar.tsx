import { PropsWithChildren } from 'react'
import {
  createStylesContext,
  Flex,
  FlexProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import { IconButton } from '~/IconButton'

import { ToolbarProvider } from './ToolbarContext'

const [ToolbarStylesProvider, useToolbarStyles] = createStylesContext('Toolbar')

export { useToolbarStyles }

export interface ToolbarProps extends PropsWithChildren, FlexProps {
  colorScheme?: 'main' | 'neutral'
}

/**
 * Container for the toolbar.
 */
export const Toolbar = ({ children, ...props }: ToolbarProps): JSX.Element => {
  const styles = useMultiStyleConfig('Toolbar', props)
  return (
    <ToolbarProvider colorScheme={props.colorScheme}>
      <ToolbarStylesProvider value={styles}>
        <Flex __css={styles.container} {...props}>
          {children}
        </Flex>
      </ToolbarStylesProvider>
    </ToolbarProvider>
  )
}

/**
 * Component to group togglable buttons to allow selection of only one in a group.
 */
export const ToolbarToggleGroup = () => {
  return <Flex></Flex>
}

export const ToolbarToggleButton = () => {
  return <Flex></Flex>
}

export const ToolbarDivider = () => {
  return <Flex></Flex>
}

export const ToolbarIconButton = IconButton
