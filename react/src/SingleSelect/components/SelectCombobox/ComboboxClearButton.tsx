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
    size,
  } = useSelectContext()

  const [announceClearedInput, setAnnounceClearedInput] = useState(false)
  const handleClearSelection = useCallback(() => {
    // Need to focus before selecting null. I have no idea why, but it works
    inputRef?.current?.focus()
    selectItem(null)
    setAnnounceClearedInput(true)
  }, [inputRef, selectItem])

  useEffect(() => {
    if (selectedItem) {
      setAnnounceClearedInput(false)
    }
  }, [inputRef, selectedItem])

  if (!isClearable) return null

  return (
    <>
      <IconButton
        // Prevent form submission from triggering this button.
        type="button"
        size={size}
        aria-invalid={isInvalid}
        isDisabled={isDisabled || isReadOnly}
        aria-label={clearButtonLabel}
        onClick={handleClearSelection}
        // Unmount the visually hidden announcement when navigated to this button
        onFocus={() => setAnnounceClearedInput(false)}
        variant="inputAttached"
        icon={<BxX />}
        isActive={!!inputValue || !!selectedItem}
      />
      {announceClearedInput && (
        <VisuallyHidden aria-live="assertive">
          Selection has been cleared
        </VisuallyHidden>
      )}
    </>
  )
}
