import { Box, Icon, useMultiStyleConfig } from '@chakra-ui/react'
import { dataAttr } from '@chakra-ui/utils'

import { CheckboxProps } from '~/Checkbox'
import { BxCheckAnimated } from '~/icons'

type ItemCheckboxIconProps = Pick<
  CheckboxProps,
  'isChecked' | 'isDisabled' | 'size'
>

export const ItemCheckboxIcon = ({
  isChecked,
  isDisabled,
  size,
}: ItemCheckboxIconProps): JSX.Element => {
  const styles = useMultiStyleConfig('Checkbox', { size })

  return (
    <Box
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      verticalAlign="top"
      userSelect="none"
      flexShrink={0}
      bg="white"
      __css={styles.control}
      data-checked={dataAttr(isChecked)}
      aria-disabled={isDisabled}
      borderColor="base.content.strong"
    >
      <Icon as={BxCheckAnimated} __css={styles.icon} isChecked={isChecked} />
    </Box>
  )
}
