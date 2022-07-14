import { useMemo } from 'react'
import { Options as TransformOptions } from 'react-markdown'
import { CSSObject, ListItem, OrderedList, Text } from '@chakra-ui/react'

import { Link } from '~/Link'

type MdComponentStyles = {
  /**
   * If exists, will be used for styling links
   */
  link?: CSSObject
  /**
   * If exists, will be used for styling text
   */
  text?: CSSObject
}

type UseMdComponentsProps = {
  styles?: MdComponentStyles
  overrides?: TransformOptions['components']
}

export const useMdComponents = ({
  styles = {},
  overrides = {},
}: UseMdComponentsProps = {}): TransformOptions['components'] => {
  const textStyles = useMemo(
    () => ({ ...(styles?.text ? { sx: styles.text } : {}) }),
    [styles.text],
  )

  const linkStyles = useMemo(
    () => ({ ...(styles.link ? { sx: styles.link } : {}) }),
    [styles.link],
  )

  const mdComponents: TransformOptions['components'] = useMemo(
    () => ({
      ol: (props) => (
        <OrderedList marginInlineStart="1.25rem" {...props} {...textStyles} />
      ),
      li: (props) => <ListItem {...props} {...textStyles} />,
      a: (props) => {
        const { href } = props
        const isExternal =
          typeof window !== 'undefined' &&
          typeof href === 'string' &&
          !href.startsWith(window.location.origin)

        return <Link {...props} isExternal={isExternal} {...linkStyles} />
      },
      p: (props) => <Text {...props} {...textStyles} />,
      ...overrides,
    }),
    [linkStyles, overrides, textStyles],
  )

  return mdComponents
}
