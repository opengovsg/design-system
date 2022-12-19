import { RestrictedHorizontalBrand, RestrictedHorizontalReverse } from '~/icons'
import { BxlFacebook } from '~/icons/BxlFacebook'
import { BxlInstagram } from '~/icons/BxlInstagram'
import { BxlLinkedin } from '~/icons/BxlLinkedin'

import { RestrictedFooterLinkWithIcon } from './types'

const footerIconConstants = {
  href: 'https://open.gov.sg',
  label: 'Open Government Products homepage',
}

export const DEFAULT_FOOTER_ICON_LINK: RestrictedFooterLinkWithIcon = {
  ...footerIconConstants,
  Icon: RestrictedHorizontalBrand,
}

export const DARKMODE_FOOTER_ICON_LINK: RestrictedFooterLinkWithIcon = {
  ...footerIconConstants,
  Icon: RestrictedHorizontalReverse,
}

export const DEFAULT_SOCIAL_MEDIA_LINKS: RestrictedFooterLinkWithIcon[] = [
  {
    href: 'https://sg.linkedin.com/company/open-government-products',
    Icon: BxlLinkedin,
    label: 'Go to our LinkedIn page',
  },
  {
    href: 'https://www.facebook.com/opengovsg',
    Icon: BxlFacebook,
    label: 'Go to our Facebook page',
  },
  {
    href: 'https://www.instagram.com/opengovsg',
    Icon: BxlInstagram,
    label: 'Go to our Instagram page',
  },
]
