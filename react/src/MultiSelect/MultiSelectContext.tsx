// Context provides multi-select handlers. Mostly complemented by SelectContext.
import { createContext, useContext } from 'react'
import { ThemingProps } from '@chakra-ui/react'
import {
  UseMultipleSelectionActions,
  UseMultipleSelectionPropGetters,
  UseMultipleSelectionState,
} from 'downshift'

import type { ComboboxItem } from '~/SingleSelect'

interface MultiSelectContextReturn<Item extends ComboboxItem = ComboboxItem>
  extends UseMultipleSelectionPropGetters<Item>,
    UseMultipleSelectionState<Item>,
    Pick<
      UseMultipleSelectionActions<Item>,
      'reset' | 'addSelectedItem' | 'removeSelectedItem' | 'setActiveIndex'
    > {
  maxItems: number | null
  colorScheme?: ThemingProps<'MultiSelect'>['colorScheme']
}

export const MultiSelectContext = createContext<
  MultiSelectContextReturn | undefined
>(undefined)

export const useMultiSelectContext = () => {
  const context = useContext(MultiSelectContext)

  if (context === undefined) {
    throw new Error(
      `useMultiSelectContext must be used within a MultiSelectContextProvider`,
    )
  }

  return context
}
