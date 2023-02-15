import { useMemo } from 'react'

import { Button, ButtonProps } from '~/Button'
import { layerStyles } from '~/theme/layerStyles'

import { useToolbarContext } from './ToolbarContext'

export type ToolbarButtonProps = ButtonProps

export const ToolbarButton = (props: ToolbarButtonProps): JSX.Element => {
  const { colorScheme } = useToolbarContext()

  const toolbarButtonProps: Partial<ButtonProps> = useMemo(() => {
    if (colorScheme === 'main') {
      return {
        colorScheme: 'inverse',
        _focusVisible: layerStyles.focusRing.inverse._focusVisible,
      }
    }
    return { colorScheme }
  }, [colorScheme])

  return <Button size="xs" variant="clear" {...toolbarButtonProps} {...props} />
}
