import { forwardRef, useCallback, useMemo } from 'react'
import {
  Flex,
  Icon,
  InputGroup,
  Stack,
  Text,
  useMergeRefs,
  VisuallyHidden,
} from '@chakra-ui/react'

import { Input } from '~/Input'

import { useSelectContext } from '../../SelectContext'
import { itemToIcon, itemToLabelString } from '../../utils/itemUtils'

import { ComboboxClearButton } from './ComboboxClearButton'
import { ToggleChevron } from './ToggleChevron'

export const SelectCombobox = forwardRef<HTMLInputElement>(
  (_props, ref): JSX.Element => {
    const {
      getComboboxProps,
      toggleMenu,
      selectedItem,
      getInputProps,
      styles,
      isDisabled,
      isSearchable,
      isReadOnly,
      isInvalid,
      inputValue,
      isRequired,
      placeholder,
      setIsFocused,
      isOpen,
      resetInputValue,
      inputAria,
      inputRef,
      isClearable,
      size,
    } = useSelectContext()

    const mergedInputRef = useMergeRefs(inputRef, ref)

    const selectedItemMeta = useMemo(
      () => ({
        icon: itemToIcon(selectedItem),
        label: itemToLabelString(selectedItem),
      }),
      [selectedItem],
    )

    const handleToggleMenu = useCallback(() => {
      if (isReadOnly || isDisabled) return
      return toggleMenu()
    }, [isDisabled, isReadOnly, toggleMenu])

    return (
      <Flex>
        <VisuallyHidden id={inputAria.id}>{inputAria.label}</VisuallyHidden>
        <InputGroup
          size={size}
          pos="relative"
          display="grid"
          marginInlineEnd={isClearable ? '-1px' : undefined}
          _focusWithin={{
            zIndex: 1,
          }}
          gridTemplateColumns="1fr"
          {...getComboboxProps({
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired,
            'aria-expanded': !!isOpen,
            onFocus: () => setIsFocused(true),
          })}
        >
          <Stack
            visibility={inputValue ? 'hidden' : 'initial'}
            direction="row"
            spacing="1rem"
            aria-disabled={isDisabled}
            sx={styles.selected}
          >
            {selectedItemMeta.icon ? (
              <Icon
                sx={styles.icon}
                as={selectedItemMeta.icon}
                aria-disabled={isDisabled}
              />
            ) : null}
            <Text noOfLines={1}>{selectedItemMeta.label}</Text>
          </Stack>
          <Input
            isReadOnly={!isSearchable || isReadOnly}
            isInvalid={isInvalid}
            isDisabled={isDisabled}
            placeholder={selectedItem ? undefined : placeholder}
            sx={styles.field}
            {...getInputProps({
              onClick: handleToggleMenu,
              onBlur: () => !isOpen && resetInputValue(),
              ref: mergedInputRef,
              'aria-describedby': inputAria.id,
            })}
          />
          <ToggleChevron />
        </InputGroup>
        <ComboboxClearButton />
      </Flex>
    )
  },
)

SelectCombobox.displayName = 'SelectCombobox'
