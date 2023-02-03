import { useMemo } from 'react'
import type { Options as TransformOptions } from 'react-markdown'
import {
  ListItem,
  OrderedList,
  SystemStyleObject,
  Text,
  TextProps,
} from '@chakra-ui/react'

import { Link, LinkProps } from '~/Link'
import type { WithSsr } from '~/types/WithSsr'

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
  link?: LinkProps & {
    /**
     * If exists, will be used to determine if link is an external link.
     * If not provided, and if @param `ssr` is true, window.location.origin will be used to determine if link is external.
     */
    isExternalFn?: (href: string) => boolean
  }
  /**
   * If exists, will be used for styling text
   */
  text?: TextProps
}

interface UseMdComponentsProps extends WithSsr {
  styles?: MdComponentStyles
  overrides?: TransformOptions['components']
  props?: MdComponentProps
}

const calcIsExternal = ({
  href,
  ssr,
  isExternalFn,
}: {
  href: unknown
  ssr?: boolean
  isExternalFn?: (href: string) => boolean
}) => {
  if (typeof href !== 'string') {
    return false
  }
  if (isExternalFn) {
    return isExternalFn?.(href)
  }
  if (ssr) {
    return false
  }
  return (
    typeof window !== 'undefined' && !href.startsWith(window.location.origin)
  )
}

export const useMdComponents = ({
  styles = {},
  props = {},
  overrides = {},
  ssr,
}: UseMdComponentsProps = {}): TransformOptions['components'] => {
  const mdComponents: TransformOptions['components'] = useMemo(
    () => ({
      ol: (p) => (
        <OrderedList marginInlineStart="1.25rem" {...p} sx={styles.text} />
      ),
      li: (p) => <ListItem {...p} sx={styles.text} />,
      a: (p) => {
        const { isExternalFn, ...restLinkProps } = props.link || {}
        const { href } = p
        const isExternal = calcIsExternal({ href, ssr, isExternalFn })

        return (
          <Link
            {...p}
            isExternal={isExternal}
            sx={styles.link}
            {...restLinkProps}
          />
        )
      },
      p: (p) => <Text {...p} sx={styles.text} {...props.text} />,
      ...overrides,
    }),
    [overrides, props.link, props.text, ssr, styles.link, styles.text],
  )

  return mdComponents
}
