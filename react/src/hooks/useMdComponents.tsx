import { useMemo } from 'react'
import { Options as TransformOptions } from 'react-markdown'
import {
  ListItem,
  OrderedList,
  SystemStyleObject,
  Text,
  TextProps,
} from '@chakra-ui/react'

import { Link, LinkProps } from '~/Link'

type MdComponentStyles = {
  /**
   * If exists, will be used for styling links
   */
  link?: SystemStyleObject
  /**
   * If exists, will be used for styling text
   */
  text?: SystemStyleObject
}

type MdComponentProps = {
  /**
   * If exists, will be passed into Link component
   */
  link?: LinkProps
  /**
   * If exists, will be used for styling text
   */
  text?: TextProps
}

type UseMdComponentsProps = {
  styles?: MdComponentStyles
  overrides?: TransformOptions['components']
  props?: MdComponentProps
}

export const useMdComponents = ({
  styles = {},
  props = {},
  overrides = {},
}: UseMdComponentsProps = {}): TransformOptions['components'] => {
  const mdComponents: TransformOptions['components'] = useMemo(
    () => ({
      ol: (p) => (
        <OrderedList marginInlineStart="1.25rem" {...p} sx={styles.text} />
      ),
      li: (p) => <ListItem {...p} sx={styles.text} />,
      a: (p) => {
        const { href } = p
        const isExternal =
          typeof window !== 'undefined' &&
          typeof href === 'string' &&
          !href.startsWith(window.location.origin)

        return (
          <Link
            {...p}
            isExternal={isExternal}
            sx={styles.link}
            {...props.link}
          />
        )
      },
      p: (p) => <Text {...p} sx={styles.text} {...props.text} />,
      ...overrides,
    }),
    [overrides, props.link, props.text, styles.link, styles.text],
  )

  return mdComponents
}
