import { useMemo } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'

import {
  DARKMODE_FOOTER_ICON_LINK,
  DEFAULT_FOOTER_ICON_LINK,
  DEFAULT_SOCIAL_MEDIA_LINKS,
} from './common/constants'
import { RestrictedFooterProps } from './common/types'
import { RestrictedCompactFooter } from './RestrictedCompactFooter'
import { RestrictedFullFooter } from './RestrictedFullFooter'

export const RestrictedFooter = ({
  variant: variantProp = 'full',
  footerIconLink,
  socialMediaLinks = DEFAULT_SOCIAL_MEDIA_LINKS,
  colorMode,
  ...footerProps
}: RestrictedFooterProps): JSX.Element => {
  const variant = useBreakpointValue(
    typeof variantProp === 'string' ? { base: variantProp } : variantProp,
    { ssr: false },
  )

  const ogpFooterIconLink = useMemo(() => {
    return colorMode === 'dark'
      ? DARKMODE_FOOTER_ICON_LINK
      : DEFAULT_FOOTER_ICON_LINK
  }, [colorMode])

  if (variant === 'compact') {
    return (
      <RestrictedCompactFooter
        colorMode={colorMode}
        socialMediaLinks={socialMediaLinks}
        footerIconLink={footerIconLink ?? ogpFooterIconLink}
        {...footerProps}
      />
    )
  }
  return (
    <RestrictedFullFooter
      colorMode={colorMode}
      socialMediaLinks={socialMediaLinks}
      footerIconLink={footerIconLink ?? ogpFooterIconLink}
      {...footerProps}
    />
  )
}
