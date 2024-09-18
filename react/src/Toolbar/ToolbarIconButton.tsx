import { forwardRef } from '@chakra-ui/react'

import { IconButton, IconButtonProps } from '~/IconButton'

import { useToolbarButtonProps } from './utils/useToolbarButtonProps'

export type ToolbarIconButtonProps = IconButtonProps

export const ToolbarIconButton = forwardRef<ToolbarIconButtonProps, 'button'>(
  (props, ref): JSX.Element => {
    const toolbarButtonProps = useToolbarButtonProps()

    return (
      <IconButton
        ref={ref}
        variant="clear"
        {...toolbarButtonProps}
        {...props}
      />
    )
  },
)
