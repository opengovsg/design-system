import { Button, ButtonProps } from '~/Button'

import { useToolbarButtonProps } from './utils/useToolbarButtonProps'

export type ToolbarButtonProps = ButtonProps

export const ToolbarButton = (props: ToolbarButtonProps): JSX.Element => {
  const toolbarButtonProps = useToolbarButtonProps()

  return <Button variant="clear" {...toolbarButtonProps} {...props} />
}
