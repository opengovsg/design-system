import { useMemo } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'

import { Button, ButtonProps } from '~/Button'
import { layerStyles } from '~/theme/layerStyles'

import { useToolbarContext } from './ToolbarContext'

export type ToolbarButtonProps = ButtonProps

export const ToolbarButton = (props: ToolbarButtonProps): JSX.Element => {
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

  const toolbarButtonProps: Partial<ButtonProps> = useMemo(() => {
    if (colorScheme === 'main') {
      return {
        colorScheme: 'inverse',
        _focusVisible: layerStyles.focusRing.inverse._focusVisible,
      }
    }
    return { colorScheme }
  }, [colorScheme])

  return (
    <Button
      size={toolbarSize}
      variant="clear"
      {...toolbarButtonProps}
      {...props}
    />
  )
}
