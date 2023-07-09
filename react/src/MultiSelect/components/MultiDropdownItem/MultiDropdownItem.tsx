import { useMemo } from 'react'
import {
  Flex,
  Icon,
  ListItem,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react'

import type { ComboboxItem } from '~/SingleSelect'
import { useSelectContext } from '~/SingleSelect'
import { DropdownItemTextHighlighter } from '~/SingleSelect/components'
import {
  isItemDisabled,
  itemToDescriptionString,
  itemToIcon,
  itemToLabelString,
} from '~/SingleSelect/utils/itemUtils'

import { ItemCheckboxIcon } from './ItemCheckboxIcon'

export interface MultiDropdownItemProps {
  item: ComboboxItem
  index: number
}

export const MultiDropdownItem = ({
  item,
  index,
}: MultiDropdownItemProps): JSX.Element => {
  const { getItemProps, isItemSelected, styles, inputValue, size } =
    useSelectContext()

  const { isSelected, icon, label, description, isDisabled } = useMemo(
    () => ({
      isSelected: isItemSelected(item),
      icon: itemToIcon(item),
      label: itemToLabelString(item),
      description: itemToDescriptionString(item),
      isDisabled: isItemDisabled(item),
    }),
    [isItemSelected, item],
  )

  return (
    <ListItem
      sx={styles.item}
      {...getItemProps({
        item,
        index,
        disabled: isDisabled,
      })}
      title={label}
    >
      <Stack direction="row" spacing="1rem" overflowX="auto">
        <ItemCheckboxIcon
          isDisabled={isDisabled}
          isChecked={isSelected}
          size={size}
          alignSelf="center"
        />
        <Flex flexDir="column" minW={0}>
          <Stack direction="row" spacing="0.5rem" align="center">
            {icon ? <Icon as={icon} sx={styles.icon} /> : null}
            <Text
              minWidth={0}
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              overflowX="hidden"
            >
              <DropdownItemTextHighlighter
                inputValue={inputValue}
                textToHighlight={label}
              />
            </Text>
          </Stack>
          {description && (
            <Text sx={styles.itemDescription}>
              <DropdownItemTextHighlighter
                inputValue={inputValue}
                textToHighlight={description}
              />
            </Text>
          )}
          {isSelected && (
            <VisuallyHidden aria-live="assertive">, selected</VisuallyHidden>
          )}
        </Flex>
      </Stack>
    </ListItem>
  )
}
