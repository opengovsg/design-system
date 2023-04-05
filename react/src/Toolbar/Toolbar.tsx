import { PropsWithChildren } from 'react'
import {
  createStylesContext,
  Flex,
  FlexProps,
  ThemingProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import { ToolbarProvider } from './ToolbarContext'

const [ToolbarStylesProvider, useToolbarStyles] = createStylesContext('Toolbar')

export { useToolbarStyles }

export interface ToolbarProps extends PropsWithChildren, FlexProps {
  colorScheme?: 'main' | 'neutral' | 'sub'
  size?: ThemingProps<'Toolbar'>['size']
}

/**
 * Container for the toolbar.
 */
export const Toolbar = ({ children, ...props }: ToolbarProps): JSX.Element => {
  const styles = useMultiStyleConfig('Toolbar', props)
  return (
    <ToolbarProvider {...props}>
      <ToolbarStylesProvider value={styles}>
        <Flex __css={styles.container} {...props}>
          {children}
        </Flex>
      </ToolbarStylesProvider>
    </ToolbarProvider>
  )
}
