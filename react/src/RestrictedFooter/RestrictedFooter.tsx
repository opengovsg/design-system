import {
  Box,
  Divider,
  Flex,
  FlexProps,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react'

import { RestrictedOgpLogo, RestrictedOgpLogoFull } from '~/icons/brand'
import { BxlFacebook } from '~/icons/BxlFacebook'
import { BxlInstagram } from '~/icons/BxlInstagram'
import { BxlLinkedin } from '~/icons/BxlLinkedin'
import { BxlYoutube } from '~/icons/BxlYoutube'
import { Link } from '~/Link'
import { ThemeColorScheme } from '~/theme/foundations/colours'

const SOCIAL_MEDIA_LINKS = {
  facebook: 'https://www.facebook.com/opengovsg',
  ogp: 'https://www.open.gov.sg/',
  linkedin: 'https://sg.linkedin.com/company/open-government-products',
  youtube: 'https://www.youtube.com/channel/UCuyiflEmkfLfIwOuuN5hAfg',
  instagram: 'https://www.instagram.com/opengovsg/',
}

type FooterLink = {
  label: string
  href: string
}

export interface RestrictedFooterProps {
  /** Application name to display in footer. */
  appName: string
  /** Tagline to display beside application name, if provided. */
  tagline?: string
  /** Footer links to display, if provided. */
  footerLinks?: FooterLink[]
  /**
   * Colour scheme of the text in the footer.
   * Defaults to `secondary` if not provided.
   */
  textColorScheme?: ThemeColorScheme
  /**
   * Background color of footer.
   * Defaults to `primary.100` if not provided.
   */
  bg?: string
}

/**
 * Must not be used directly unless you are in the @opengovsg org as there are
 * references to the organisation's logo in the code.
 * Suggest recreating the component whilst referencing the code in here.
 * Read LICENSE.md for more information.
 */
export const RestrictedFooter = ({
  appName,
  tagline,
  footerLinks,
  textColorScheme = 'secondary',
  bg = 'primary.100',
}: RestrictedFooterProps): JSX.Element => {
  const currentYear = new Date().getFullYear()

  return (
    <RestrictedFooter.Container bg={bg}>
      <RestrictedFooter.Section>
        <Stack
          flex={1}
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 0, lg: '1rem' }}
          paddingBottom={{ base: '1.5rem', lg: 0 }}
          paddingEnd={{ base: 0, lg: '1.5rem' }}
          align="baseline"
        >
          <Text textStyle="h4" color={`${textColorScheme}.500`}>
            {appName}
          </Text>
          <Text textStyle="body-2" color={`${textColorScheme}.500`}>
            {tagline}
          </Text>
        </Stack>
        <Wrap
          flex={1}
          shouldWrapChildren
          textStyle="body-2"
          spacing={{ base: '1rem', lg: '1.25rem' }}
          direction={{ base: 'column', lg: 'row' }}
          justify={{ base: 'normal', lg: 'flex-end' }}
        >
          {footerLinks?.map(({ label, href }, index) => (
            <Link
              m="-0.25rem"
              key={index}
              colorScheme={textColorScheme}
              variant="standalone"
              w="fit-content"
              href={href}
            >
              {label}
            </Link>
          ))}
        </Wrap>
      </RestrictedFooter.Section>
      <Divider color={`${textColorScheme}.300`} my="1.5rem" />
      <RestrictedFooter.Section>
        <Box>
          <Text
            textStyle="caption-1"
            color={`${textColorScheme}.500`}
            mb="0.5rem"
          >
            Built by
          </Text>
          <Link
            title="Open Government Products Logo"
            colorScheme={textColorScheme}
            mb="2rem"
            href={SOCIAL_MEDIA_LINKS.ogp}
          >
            <RestrictedOgpLogoFull />
          </Link>
        </Box>

        <Box>
          <Stack
            spacing="1rem"
            direction="row"
            mb="0.5rem"
            justify={{ base: 'normal', lg: 'flex-end' }}
          >
            <Link
              title="link to LinkedIn page"
              w="2rem"
              href={SOCIAL_MEDIA_LINKS.linkedin}
              colorScheme={textColorScheme}
            >
              <BxlLinkedin />
            </Link>
            <Link
              title="link to Facebook page"
              w="2rem"
              href={SOCIAL_MEDIA_LINKS.facebook}
              colorScheme={textColorScheme}
            >
              <BxlFacebook />
            </Link>
            <Link
              title="link to YouTube page"
              w="2rem"
              href={SOCIAL_MEDIA_LINKS.youtube}
              colorScheme={textColorScheme}
            >
              <BxlYoutube />
            </Link>
            <Link
              title="link to Instagram page"
              w="2rem"
              href={SOCIAL_MEDIA_LINKS.instagram}
              colorScheme={textColorScheme}
            >
              <BxlInstagram />
            </Link>
            <Link
              title="link to OGP homepage"
              w="2rem"
              href={SOCIAL_MEDIA_LINKS.ogp}
              colorScheme={textColorScheme}
            >
              <RestrictedOgpLogo />
            </Link>
          </Stack>
          <Flex
            flexDir={{ base: 'column', md: 'row' }}
            textStyle="legal"
            color={`${textColorScheme}.500`}
          >
            <Text>©{currentYear} Open Government Products,&nbsp;</Text>
            <Text>Government Technology Agency of Singapore</Text>
          </Flex>
        </Box>
      </RestrictedFooter.Section>
    </RestrictedFooter.Container>
  )
}

interface FooterContainerProps extends FlexProps {
  children: React.ReactNode
}

RestrictedFooter.Container = ({
  children,
  ...props
}: FooterContainerProps): JSX.Element => {
  return (
    <Flex
      as="footer"
      flexDirection="column"
      py="3rem"
      px={{ base: '1.5rem', md: '5.5rem', lg: '9.25rem' }}
      {...props}
    >
      {children}
    </Flex>
  )
}

interface FooterSectionProps extends FlexProps {
  children: React.ReactNode
}

RestrictedFooter.Section = ({
  children,
  ...props
}: FooterSectionProps): JSX.Element => {
  return (
    <Flex
      align={{ base: 'normal', lg: 'center' }}
      flex={1}
      justify="space-between"
      flexDir={{ base: 'column', lg: 'row' }}
      {...props}
    >
      {children}
    </Flex>
  )
}
