import { useCallback, useEffect, useState } from 'react'
import { VisuallyHidden } from '@chakra-ui/react'

import { IconButton } from '~/IconButton'
import { BxX } from '~/icons'

import { useSelectContext } from '../../SelectContext'

export const ComboboxClearButton = (): JSX.Element | null => {
  const {
    isClearable,
    isDisabled,
    isReadOnly,
    isInvalid,
    clearButtonLabel,
    selectItem,
    inputValue,
    inputRef,
    selectedItem,
  } = useSelectContext()

  const [announceClearedInput, setAnnounceClearedInput] = useState(false)
  const handleClearSelection = useCallback(() => {
    selectItem(null)
    inputRef?.current?.focus()
    setAnnounceClearedInput(true)
  }, [inputRef, selectItem])

  useEffect(() => {
    if (selectedItem) {
      setAnnounceClearedInput(false)
    }
  }, [inputRef, selectedItem])

  if (!isClearable) return null

  return (
    <IconButton
      // Prevent form submission from triggering this button.
      type="button"
      aria-invalid={isInvalid}
      isDisabled={isDisabled || isReadOnly}
      aria-label={clearButtonLabel}
      onClick={handleClearSelection}
      variant="inputAttached"
      icon={<BxX />}
      isActive={!!inputValue || !!selectedItem}
    >
      {announceClearedInput && (
        <VisuallyHidden aria-live="assertive">
          Selection has been cleared
        </VisuallyHidden>
      )}
    </IconButton>
  )
}
