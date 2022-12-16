import { Box, Icon, useMultiStyleConfig } from '@chakra-ui/react'
import { dataAttr } from '@chakra-ui/utils'

import { CheckboxProps } from '~/Checkbox'
import { BxCheckAnimated } from '~/icons'
import { CHECKBOX_THEME_KEY } from '~/theme/components/Checkbox'

type ItemCheckboxIconProps = Pick<
  CheckboxProps,
  'isChecked' | 'isDisabled' | 'size'
>

export const ItemCheckboxIcon = ({
  isChecked,
  isDisabled,
  size,
}: ItemCheckboxIconProps): JSX.Element => {
  const styles = useMultiStyleConfig(CHECKBOX_THEME_KEY, { size })

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
      borderColor="base.content.dark"
    >
      <Icon as={BxCheckAnimated} __css={styles.icon} isChecked={isChecked} />
    </Box>
  )
}
