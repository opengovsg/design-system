import { FlexProps, ThemeTypings } from '@chakra-ui/react'
import { SetOptional } from 'type-fest'

export type RestrictedFooterLink = {
  label: string
  href: string
}

export type RestrictedFooterLinkWithIcon = RestrictedFooterLink & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: (props: any) => JSX.Element
}

export interface RestrictedFooterContainerProps extends FlexProps {
  children?: React.ReactNode
}

export interface RestrictedFooterVariantProps {
  /** Application name to display in footer. */
  appName: string
  /** Link when clicking on application name or logo. */
  appLink: string
  /** Tagline to display beside application name, if provided. */
  tagline?: string
  /** Link for footer icon. Defaults to OGP homepage. */
  footerIconLink: RestrictedFooterLinkWithIcon
  /** Footer links to display, if provided. */
  footerLinks?: RestrictedFooterLink[]
  /** Social media links to display, if provided. Defaults to OGP links. */
  socialMediaLinks: RestrictedFooterLinkWithIcon[]
  /**
   * Colour scheme of the text in the footer.
   * Defaults to `brand.secondary` if not provided.
   */
  textColorScheme: ThemeTypings['colorSchemes']
  containerProps?: Partial<RestrictedFooterContainerProps>
}

export interface RestrictedFooterProps
  extends SetOptional<
    RestrictedFooterVariantProps,
    'socialMediaLinks' | 'textColorScheme' | 'footerIconLink'
  > {
  /**
   * The footer variant to display. Defaults to `full` if not provided.
   */
  variant?: 'full' | 'compact'

  /**
   * Whether logos are monochrome in `compact` variant.
   */
  compactMonochromeLogos?: boolean
}
