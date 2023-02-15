import { TableColumnHeaderProps, useTableStyles } from '@chakra-ui/react'
import { chakra, forwardRef } from '@chakra-ui/system'

import { omitInteractivePseudos } from './utils/omitInteractivePseudos'

export const Th = forwardRef<TableColumnHeaderProps, 'th'>(
  ({ isNumeric, ...props }, ref) => {
    const styles = useTableStyles()
    const thStyles = omitInteractivePseudos(props, styles.th)
    return (
      <chakra.th
        {...props}
        ref={ref}
        __css={thStyles}
        data-is-numeric={isNumeric}
      />
    )
  },
)
