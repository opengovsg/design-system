import { Icon, InputRightElement } from '@chakra-ui/react'

import { BxsChevronDown } from '~/icons/BxsChevronDown'
import { BxsChevronUp } from '~/icons/BxsChevronUp'

import { useSelectContext } from '../../SelectContext'

export const ToggleChevron = (): JSX.Element => {
  const { isOpen, getToggleButtonProps, isDisabled, isReadOnly, styles } =
    useSelectContext()

  return (
    <InputRightElement
      {...getToggleButtonProps({ disabled: isDisabled || isReadOnly })}
    >
      <Icon
        sx={styles.icon}
        as={isOpen ? BxsChevronUp : BxsChevronDown}
        aria-label={`${isOpen ? 'Close' : 'Open'} dropdown options`}
        aria-disabled={isDisabled || isReadOnly}
      />
    </InputRightElement>
  )
}

// So input group knows to add right padding to the inner input.
ToggleChevron.id = InputRightElement.id
