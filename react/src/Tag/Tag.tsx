import {
  Box,
  chakra,
  createStylesContext,
  forwardRef,
  Icon,
  IconProps,
  Tag as ChakraTag,
  TagCloseButtonProps as ChakraTagCloseButtonProps,
  TagProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import { BxX } from '~/icons'

const [StylesProvider, useStyles] = createStylesContext('Tag')

export const TagLeftIcon = forwardRef<IconProps, 'svg'>((props, ref) => {
  const styles = useStyles()
  return (
    <Icon
      ref={ref}
      verticalAlign="top"
      marginStart={0}
      {...props}
      __css={styles.icon}
    />
  )
})
export const TagRightIcon = forwardRef<IconProps, 'svg'>((props, ref) => {
  const styles = useStyles()
  return (
    <Icon
      ref={ref}
      verticalAlign="top"
      marginEnd={0}
      {...props}
      __css={styles.icon}
    />
  )
})

const TagCloseIcon = () => <Icon as={BxX} fontSize="inherit" />

export type TagCloseButtonProps = ChakraTagCloseButtonProps
/** Not using Chakra's TagCloseButton due to inability to override aria-label */
export const TagCloseButton = ({
  isDisabled,
  children,
  ...rest
}: TagCloseButtonProps): JSX.Element => {
  const styles = useStyles()

  return (
    <Box display="inline-flex" flexGrow={1} justifyContent="end">
      <chakra.button
        type="button"
        aria-label="Remove selected option"
        disabled={isDisabled}
        sx={styles.closeButton}
        {...rest}
      >
        {children || <TagCloseIcon />}
      </chakra.button>
    </Box>
  )
}

export const Tag = forwardRef<TagProps, 'span'>((props, ref): JSX.Element => {
  const styles = useMultiStyleConfig('Tag', props)
  return (
    <StylesProvider value={styles}>
      <ChakraTag {...props} ref={ref} />
    </StylesProvider>
  )
})
