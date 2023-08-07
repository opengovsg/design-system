import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbProps as ChakraBreadcrumbProps,
} from '@chakra-ui/react'

import { BxChevronRight } from '~/icons'

export type BreadcrumbProps = ChakraBreadcrumbProps

export const Breadcrumb = (props: BreadcrumbProps): JSX.Element => {
  return <ChakraBreadcrumb separator={<BxChevronRight />} {...props} />
}
