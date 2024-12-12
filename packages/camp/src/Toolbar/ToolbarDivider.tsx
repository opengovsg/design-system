import { Divider, DividerProps } from '@chakra-ui/react'

import { useToolbarStyles } from './Toolbar'

export type ToolbarDividerProps = DividerProps

export const ToolbarDivider = (props: ToolbarDividerProps): JSX.Element => {
  const styles = useToolbarStyles()

  return <Divider orientation="vertical" __css={styles.divider} {...props} />
}
