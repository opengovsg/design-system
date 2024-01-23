import { useMemo } from 'react'
import { useBreakpointValue, useTheme } from '@chakra-ui/react'
import { memoizedGet as get } from '@chakra-ui/utils'

import { ButtonProps } from '~/Button'
import { layerStyles } from '~/theme/layerStyles'

import { useToolbarContext } from '../ToolbarContext'

export const useToolbarButtonProps = (): ButtonProps => {
  const { colorScheme, size } = useToolbarContext()
  const theme = useTheme()

  const inverseFocusRingStyle = get(
    theme,
    'layerStyles.focusRing.inverse._focusVisible',
    layerStyles.focusRing.inverse._focusVisible,
  )

  const toolbarBreakpointSize = useBreakpointValue(
    typeof size === 'string' ? { base: size } : size,
  )

  const toolbarSize = useMemo(() => {
    switch (toolbarBreakpointSize) {
      case 'xs':
        return 'xs'
      default:
        return 'sm'
    }
  }, [toolbarBreakpointSize])

  const toolbarButtonStyleProps: Partial<ButtonProps> = useMemo(() => {
    switch (colorScheme) {
      case 'main':
      case 'sub':
        return {
          colorScheme: 'inverse',
          _focusVisible: inverseFocusRingStyle,
        }
      default:
        return { colorScheme }
    }
  }, [colorScheme, inverseFocusRingStyle])

  return {
    ...toolbarButtonStyleProps,
    size: toolbarSize,
  }
}
