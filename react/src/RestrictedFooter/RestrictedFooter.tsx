import { useMemo } from 'react'
import { useBreakpointValue, useColorMode } from '@chakra-ui/react'

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
  colorMode: colorModeProp,
  ssr,
  ...footerProps
}: RestrictedFooterProps): JSX.Element => {
  const { colorMode } = useColorMode()
  const variant = useBreakpointValue(
    typeof variantProp === 'string' ? { base: variantProp } : variantProp,
    { ssr },
  )

  const colorModeBreakpointValues = useMemo(() => {
    if (!colorModeProp) return { base: undefined }
    if (typeof colorModeProp === 'string') {
      return { base: colorModeProp }
    }
    return colorModeProp
  }, [colorModeProp])

  const colorModePropValue = useBreakpointValue(colorModeBreakpointValues, {
    ssr,
  })

  const colorModeToUse = colorModePropValue ?? colorMode

  const ogpFooterIconLink = useMemo(() => {
    return colorModeToUse === 'dark'
      ? DARKMODE_FOOTER_ICON_LINK
      : DEFAULT_FOOTER_ICON_LINK
  }, [colorModeToUse])

  if (variant === 'compact') {
    return (
      <RestrictedCompactFooter
        colorMode={colorModeToUse}
        socialMediaLinks={socialMediaLinks}
        footerIconLink={footerIconLink ?? ogpFooterIconLink}
        {...footerProps}
      />
    )
  }
  return (
    <RestrictedFullFooter
      colorMode={colorModeToUse}
      socialMediaLinks={socialMediaLinks}
      footerIconLink={footerIconLink ?? ogpFooterIconLink}
      {...footerProps}
    />
  )
}
