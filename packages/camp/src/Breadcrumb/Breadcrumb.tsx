import { cloneElement, useMemo } from 'react'
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbProps as ChakraBreadcrumbProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import { BxChevronRight } from '~/icons'

export type BreadcrumbProps = ChakraBreadcrumbProps

export const Breadcrumb = ({
  separator: _separator = <BxChevronRight />,
  ...props
}: BreadcrumbProps): JSX.Element => {
  const styles = useMultiStyleConfig('Breadcrumb', props)

  const separator = useMemo(() => {
    if (!_separator) {
      return undefined
    }
    if (typeof _separator === 'string') {
      return _separator
    }
    return cloneElement(_separator, {
      fontSize: styles.separator.lineHeight,
    })
  }, [_separator, styles.separator.lineHeight])

  return <ChakraBreadcrumb separator={separator} {...props} />
}
