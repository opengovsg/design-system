import { useBreakpointValue } from '@chakra-ui/react'

import {
  DEFAULT_FOOTER_ICON_LINK,
  DEFAULT_SOCIAL_MEDIA_LINKS,
} from './common/constants'
import { RestrictedFooterProps } from './common/types'
import { RestrictedCompactFooter } from './RestrictedCompactFooter'
import { RestrictedFullFooter } from './RestrictedFullFooter'

export const RestrictedFooter = ({
  variant = 'full',
  footerIconLink = DEFAULT_FOOTER_ICON_LINK,
  socialMediaLinks = DEFAULT_SOCIAL_MEDIA_LINKS,
  textColorScheme = 'secondary',
  compactMonochromeLogos,
  ...footerProps
}: RestrictedFooterProps): JSX.Element => {
  const isDesktop = useBreakpointValue({ base: false, xs: false, lg: true })

  if (variant === 'compact' && isDesktop) {
    return (
      <RestrictedCompactFooter
        compactMonochromeLogos={compactMonochromeLogos}
        socialMediaLinks={socialMediaLinks}
        textColorScheme={textColorScheme}
        footerIconLink={footerIconLink}
        {...footerProps}
      />
    )
  }
  return (
    <RestrictedFullFooter
      socialMediaLinks={socialMediaLinks}
      textColorScheme={textColorScheme}
      footerIconLink={footerIconLink}
      {...footerProps}
    />
  )
}
