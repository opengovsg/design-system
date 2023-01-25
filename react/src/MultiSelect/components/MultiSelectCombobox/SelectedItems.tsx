import { MouseEvent, useCallback, useMemo } from 'react'

import { Button } from '~/Button'
import { useSelectContext } from '~/SingleSelect'

import { useMultiSelectContext } from '../../MultiSelectContext'
import { MultiSelectItem } from '../MultiSelectItem'

const ShowMoreItemBlock = ({ amountToShow }: { amountToShow: number }) => {
  const { isDisabled, isReadOnly, setIsFocused, inputRef } = useSelectContext()

  const handleClick = useCallback(
    (e: MouseEvent) => {
      // Prevent click from bubbling to parent.
      e.stopPropagation()
      if (isDisabled || isReadOnly) return
      setIsFocused(true)
      inputRef?.current?.focus()
    },
    [inputRef, isDisabled, isReadOnly, setIsFocused],
  )

  return (
    <Button onClick={handleClick} variant="link" size="sm" tabIndex={-1}>
      +{amountToShow} more
    </Button>
  )
}

export const SelectedItems = (): JSX.Element => {
  const { selectedItems, maxItems } = useMultiSelectContext()
  const { isFocused, isOpen } = useSelectContext()

  const items = useMemo(() => {
    const itemsToRender = []
    for (let i = 0; i < selectedItems.length; i++) {
      if (isFocused || !maxItems || i < maxItems || isOpen) {
        const item = selectedItems[i]
        // Key has to be index so focus is maintained correctly when items are removed.
        // Some downshift quirk it seems.
        itemsToRender.push(<MultiSelectItem item={item} index={i} key={i} />)
      } else {
        itemsToRender.push(
          <ShowMoreItemBlock
            amountToShow={selectedItems.length - maxItems}
            key={`show-more-${i}`}
          />,
        )
        break
      }
    }
    return itemsToRender
  }, [isFocused, isOpen, maxItems, selectedItems])

  return <>{items}</>
}
