import { useMemo } from 'react'
import { merge } from 'lodash'

import { Button, ButtonProps } from '~/Button'

import { useToolbarStyles } from './Toolbar'

export type ToolbarButtonProps = ButtonProps

export const ToolbarButton = (props: ToolbarButtonProps): JSX.Element => {
  const styles = useToolbarStyles()
  const buttonStyles = useMemo(
    () => merge({}, styles.button, props.sx),
    [styles.button, props.sx],
  )

  return <Button size="xs" {...props} sx={buttonStyles} />
}
