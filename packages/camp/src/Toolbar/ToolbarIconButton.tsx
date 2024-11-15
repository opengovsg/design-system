import { IconButton, IconButtonProps } from '~/IconButton'

import { useToolbarButtonProps } from './utils/useToolbarButtonProps'

export type ToolbarIconButtonProps = IconButtonProps

export const ToolbarIconButton = (
  props: ToolbarIconButtonProps,
): JSX.Element => {
  const toolbarButtonProps = useToolbarButtonProps()

  return <IconButton variant="clear" {...toolbarButtonProps} {...props} />
}
