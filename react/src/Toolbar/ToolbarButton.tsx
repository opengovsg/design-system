import { forwardRef } from '@chakra-ui/react'

import { Button, ButtonProps } from '~/Button'

import { useToolbarButtonProps } from './utils/useToolbarButtonProps'

export type ToolbarButtonProps = ButtonProps

export const ToolbarButton = forwardRef<ToolbarButtonProps, 'button'>(
  (props, ref): JSX.Element => {
    const toolbarButtonProps = useToolbarButtonProps()

    return (
      <Button variant="clear" ref={ref} {...toolbarButtonProps} {...props} />
    )
  },
)
