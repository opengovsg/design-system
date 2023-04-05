import { useMemo } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'

import { ButtonProps } from '~/Button'
import { layerStyles } from '~/theme/layerStyles'

import { useToolbarContext } from '../ToolbarContext'

export const useToolbarButtonProps = (): ButtonProps => {
  const { colorScheme, size } = useToolbarContext()

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
          _focusVisible: layerStyles.focusRing.inverse._focusVisible,
        }
      default:
        return { colorScheme }
    }
  }, [colorScheme])

  return {
    ...toolbarButtonStyleProps,
    size: toolbarSize,
  }
}
