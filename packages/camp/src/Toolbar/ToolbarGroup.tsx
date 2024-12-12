import { Wrap, WrapProps } from '@chakra-ui/react'

import { useToolbarStyles } from './Toolbar'

export type ToolbarGroupProps = WrapProps

export const ToolbarGroup = (props: ToolbarGroupProps): JSX.Element => {
  const styles = useToolbarStyles()
  return (
    <Wrap
      shouldWrapChildren
      overflow="initial"
      flexDir="row"
      __css={styles.group}
      spacing="0.5rem"
      {...props}
    />
  )
}
