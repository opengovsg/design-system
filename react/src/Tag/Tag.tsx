import {
  Box,
  chakra,
  createStylesContext,
  forwardRef,
  HTMLChakraProps,
  Icon,
  IconProps,
  Tag as ChakraTag,
  TagCloseButtonProps as ChakraTagCloseButtonProps,
  TagProps as ChakraTagProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import { BxX } from '~/icons'

export interface TagProps extends ChakraTagProps {
  colorScheme?:
    | ChakraTagProps['colorScheme']
    | 'main'
    | 'success'
    | 'warning'
    | 'critical'
}

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

export type TagLabelProps = HTMLChakraProps<'span'>

export const TagLabel = forwardRef<TagLabelProps, 'span'>((props, ref) => {
  const styles = useStyles()
  return <chakra.span ref={ref} noOfLines={1} {...props} __css={styles.label} />
})

TagLabel.displayName = 'TagLabel'

export const Tag = forwardRef<TagProps, 'span'>((props, ref): JSX.Element => {
  const styles = useMultiStyleConfig('Tag', props)
  return (
    <StylesProvider value={styles}>
      <ChakraTag {...props} ref={ref} />
    </StylesProvider>
  )
})

Tag.displayName = 'Tag'
