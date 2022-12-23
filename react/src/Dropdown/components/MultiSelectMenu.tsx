import { Virtuoso } from 'react-virtuoso'
import { List, ListItem, Portal } from '@chakra-ui/react'

import { VIRTUAL_LIST_OVERSCAN_HEIGHT } from '../constants'
import { useSelectContext } from '../SelectContext'
import { itemToValue } from '../utils/itemUtils'

import { MultiDropdownItem } from './MultiDropdownItem'
import { useSelectPopover } from './SelectPopover'

export const MultiSelectMenu = (): JSX.Element => {
  const {
    getMenuProps,
    isOpen,
    items,
    nothingFoundLabel,
    styles,
    virtualListRef,
    virtualListHeight,
    size,
  } = useSelectContext()

  const { floatingRef, floatingStyles } = useSelectPopover()

  return (
    <Portal>
      <List
        style={floatingStyles}
        {...getMenuProps({
          hidden: !isOpen,
          ref: floatingRef,
        })}
        sx={styles.list}
      >
        {isOpen && items.length > 0 && (
          <Virtuoso
            ref={virtualListRef}
            data={items}
            overscan={VIRTUAL_LIST_OVERSCAN_HEIGHT[size]}
            style={{ height: virtualListHeight }}
            itemContent={(index, item) => {
              return (
                <MultiDropdownItem
                  key={`${itemToValue(item)}${index}`}
                  item={item}
                  index={index}
                />
              )
            }}
          />
        )}
        {isOpen && items.length === 0 ? (
          <ListItem role="option" sx={styles.emptyItem}>
            {nothingFoundLabel}
          </ListItem>
        ) : null}
      </List>
    </Portal>
  )
}
