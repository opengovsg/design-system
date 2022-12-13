import { useMemo } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'

import { meetsWcagAaRatio } from '~/theme/utils/contrast'

import {
  BLACK_MONO_FOOTER_ICON_LINK,
  DEFAULT_FOOTER_ICON_LINK,
  DEFAULT_SOCIAL_MEDIA_LINKS,
  WHITE_FOOTER_ICON_LINK,
  WHITE_MONO_FOOTER_ICON_LINK,
} from './common/constants'
import { RestrictedFooterProps } from './common/types'
import { RestrictedCompactFooter } from './RestrictedCompactFooter'
import { RestrictedFullFooter } from './RestrictedFullFooter'

export const RestrictedFooter = ({
  variant = 'full',
  footerIconLink,
  socialMediaLinks = DEFAULT_SOCIAL_MEDIA_LINKS,
  textColorScheme = 'brand.secondary',
  compactMonochromeLogos,
  ...footerProps
}: RestrictedFooterProps): JSX.Element => {
  const isDesktop = useBreakpointValue({ base: false, xs: false, lg: true })

  const ogpFooterIconLink = useMemo(() => {
    if (!footerProps.containerProps?.bg) {
      return DEFAULT_FOOTER_ICON_LINK
    }

    const {
      containerProps: { bg },
    } = footerProps

    const isMeetsContrast = meetsWcagAaRatio('#000', bg.toString())

    // Calculate the contrast ratio of the OGP logo text against the footer background color.
    if (compactMonochromeLogos && variant === 'compact' && isDesktop) {
      return isMeetsContrast
        ? BLACK_MONO_FOOTER_ICON_LINK
        : WHITE_MONO_FOOTER_ICON_LINK
    } else {
      return isMeetsContrast ? DEFAULT_FOOTER_ICON_LINK : WHITE_FOOTER_ICON_LINK
    }
  }, [compactMonochromeLogos, footerProps, isDesktop, variant])

  if (variant === 'compact' && isDesktop) {
    return (
      <RestrictedCompactFooter
        compactMonochromeLogos={compactMonochromeLogos}
        socialMediaLinks={socialMediaLinks}
        textColorScheme={textColorScheme}
        footerIconLink={footerIconLink ?? ogpFooterIconLink}
        {...footerProps}
      />
    )
  }
  return (
    <RestrictedFullFooter
      socialMediaLinks={socialMediaLinks}
      textColorScheme={textColorScheme}
      footerIconLink={footerIconLink ?? ogpFooterIconLink}
      {...footerProps}
    />
  )
}
