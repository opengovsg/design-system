// Hook to normalize item array for easy filtering and checking of state

import { useCallback, useMemo } from 'react'

import { ComboboxItem } from '../types'

export type ItemWithIndex<Item extends ComboboxItem = ComboboxItem> = {
  item: Item
  index: number
}

export type UseItemsReturn<Item extends ComboboxItem = ComboboxItem> = {
  byValue: Record<string, ItemWithIndex<Item>>
}

interface UseItemProps<Item extends ComboboxItem = ComboboxItem> {
  rawItems: Item[]
  itemToValue: <Item extends ComboboxItem>(item?: Item | undefined) => string
}

export const useItems = <Item extends ComboboxItem = ComboboxItem>({
  rawItems,
  itemToValue,
}: UseItemProps<Item>) => {
  const normalizedItems = useMemo(() => {
    const initialStore: UseItemsReturn<Item> = {
      // Normalized store for filtering and retrieval of state
      byValue: {},
    }

    let itemIndex = 0

    return rawItems.reduce((store, item) => {
      const value = itemToValue(item)
      // Do nothing if no value.
      if (!value) {
        return store
      }

      store.byValue[value] = {
        item,
        index: itemIndex,
      }

      // Only increment if item has a value.
      itemIndex++
      return store
    }, initialStore)
  }, [rawItems, itemToValue])

  const getItemByValue = useCallback(
    (value: string): ItemWithIndex<Item> | null => {
      return normalizedItems.byValue[value] ?? null
    },
    [normalizedItems.byValue],
  )

  return {
    items: rawItems,
    getItemByValue,
  }
}
