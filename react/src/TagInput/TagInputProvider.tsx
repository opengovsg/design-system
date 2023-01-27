import { PropsWithChildren } from 'react'
import { createStylesContext, SystemStyleObject } from '@chakra-ui/react'

const [TagInputStylesProvider, _useTagInputStyles] =
  createStylesContext('TagInput')

interface TagInputProviderProps {
  styles: Record<string, SystemStyleObject>
}

export const TagInputProvider = ({
  children,
  styles,
}: PropsWithChildren<TagInputProviderProps>) => {
  return (
    <TagInputStylesProvider value={styles}>{children}</TagInputStylesProvider>
  )
}

export const useTagInputStyles = _useTagInputStyles
