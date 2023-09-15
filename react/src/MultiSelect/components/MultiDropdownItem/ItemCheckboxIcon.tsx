import { Box, Icon, useMultiStyleConfig } from '@chakra-ui/react'
import { dataAttr } from '@chakra-ui/utils'

import { CheckboxProps } from '~/Checkbox'
import { BxCheckAnimated } from '~/icons'

type ItemCheckboxIconProps = Pick<
  CheckboxProps,
  'isChecked' | 'isDisabled' | 'size' | 'sx'
>

export const ItemCheckboxIcon = ({
  isChecked,
  isDisabled,
  size,
  sx,
}: ItemCheckboxIconProps): JSX.Element => {
  const styles = useMultiStyleConfig('Checkbox', { size })

  return (
    <Box
      userSelect="none"
      __css={styles.control}
      data-checked={dataAttr(isChecked)}
      sx={sx}
      aria-disabled={isDisabled}
    >
      <Icon as={BxCheckAnimated} __css={styles.icon} isChecked={isChecked} />
    </Box>
  )
}
