import { useMemo } from 'react'
import { Components } from 'react-markdown'
import {
  LinkProps,
  ListItem,
  ListProps,
  OrderedList,
  SystemStyleObject,
  Text,
  TextProps,
  UnorderedList,
} from '@chakra-ui/react'

import { Link } from '~/Link'
import { WithSsr } from '~/types/WithSsr'

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
   * If exists, will be passed into List related component
   */
  list?: ListProps
  /**
   * If exists, will be passed into Text related component
   */
  text?: TextProps
}

type MdComponentStyles = {
  /**
   * If exists, will be used for styling links.
   */
  link?: SystemStyleObject
  /**
   * If exists, will be used for styling lists
   */
  list?: SystemStyleObject
  /**
   * If exists, will be used for styling text
   */
  text?: SystemStyleObject
}

interface UseMdComponentsProps extends WithSsr {
  styles?: MdComponentStyles
  props?: MdComponentProps
  overrides?: Components
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
}: UseMdComponentsProps = {}): Components => {
  const textStyles = useMemo(
    () => ({
      sx: styles.text,
    }),
    [styles.text],
  )

  const linkStyles = useMemo(
    () => ({
      sx: {
        whiteSpace: 'pre-wrap',
        display: 'initial',
        ...(styles.link ?? {}),
      },
    }),
    [styles.link],
  )

  const listStyles = useMemo(
    () => ({
      sx: {
        whiteSpace: 'pre-wrap',
        ...(styles.list ?? {}),
      },
    }),
    [styles.list],
  )

  const mdComponents: Components = useMemo(
    () => ({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ol: ({ node, ordered, ...rest }) => (
        <OrderedList
          marginInlineStart="1.25rem"
          whiteSpace="initial"
          {...props.list}
          {...rest}
          {...textStyles}
        />
      ),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ul: ({ node, ordered, ...rest }) => (
        <UnorderedList {...props.list} {...rest} {...listStyles} />
      ),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      li: ({ node, ordered, ...rest }) => (
        <ListItem {...rest} {...textStyles} />
      ),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      a: ({ node, href, ...rest }) => {
        const { isExternalFn, ...restLinkProps } = props.link ?? {}
        const isExternal = calcIsExternal({ href, ssr, isExternalFn })

        return (
          <Link
            isExternal={isExternal}
            href={href}
            {...linkStyles}
            {...rest}
            {...restLinkProps}
          />
        )
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      p: ({ node, ...props }) => <Text {...props} {...textStyles} />,
      ...overrides,
    }),
    [
      overrides,
      props.list,
      props.link,
      textStyles,
      listStyles,
      linkStyles,
      ssr,
    ],
  )

  return mdComponents
}
