import { PropsWithChildren, useMemo } from 'react'
import { chakra } from '@chakra-ui/react'
import fuzzysort from 'fuzzysort'

import { useSelectContext } from '~/Dropdown/SelectContext'

const HighlightMark = ({ children }: PropsWithChildren) => {
  const { styles } = useSelectContext()
  return <chakra.mark sx={styles.highlight}>{children}</chakra.mark>
}

interface DropdownItemTextHighlighterProps {
  /** Current input value in dropdown for highlighting of matched text */
  inputValue: string
  textToHighlight: string
}

export const DropdownItemTextHighlighter = ({
  inputValue,
  textToHighlight,
}: DropdownItemTextHighlighterProps): JSX.Element => {
  const markedComponents = useMemo(() => {
    const result = fuzzysort.single(inputValue, textToHighlight)
    // Return the original text if no match is found.
    if (!result) return textToHighlight
    return fuzzysort.highlight(result, (m, i) => (
      <HighlightMark key={i}>{m}</HighlightMark>
    ))
  }, [inputValue, textToHighlight])

  return <chakra.span>{markedComponents}</chakra.span>
}
