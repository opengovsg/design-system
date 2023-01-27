import { forwardRef } from 'react'

import { SelectPopoverProvider } from '~/SingleSelect/components'

import { MultiSelectCombobox } from './components/MultiSelectCombobox'
import { MultiSelectMenu } from './components/MultiSelectMenu'
import {
  MultiSelectProvider,
  MultiSelectProviderProps,
} from './MultiSelectProvider'

export type MultiSelectProps = Omit<MultiSelectProviderProps, 'children'>

export const MultiSelect = forwardRef<HTMLInputElement, MultiSelectProps>(
  (props, ref): JSX.Element => {
    return (
      <MultiSelectProvider {...props}>
        <SelectPopoverProvider>
          <MultiSelectCombobox ref={ref} />
          <MultiSelectMenu />
        </SelectPopoverProvider>
      </MultiSelectProvider>
    )
  },
)

MultiSelect.displayName = 'MultiSelect'
