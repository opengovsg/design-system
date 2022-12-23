import { Fragment, useMemo } from 'react'
import {
  Box,
  DarkMode,
  Divider,
  Flex,
  Link,
  Stack,
  Text,
  useMultiStyleConfig,
  Wrap,
} from '@chakra-ui/react'

import {
  DEFAULT_FOOTER_ICON_LINK,
  DEFAULT_SOCIAL_MEDIA_LINKS,
} from './common/constants'
import {
  RestrictedFooterContainerProps,
  RestrictedFooterVariantProps,
} from './common/types'
import {
  FooterStylesProvider,
  useFooterStyles,
} from './RestrictedFooterStyleProvider'

export const RestrictedFullFooter = ({
  appName,
  appLink,
  tagline,
  footerLinks,
  footerIconLink = DEFAULT_FOOTER_ICON_LINK,
  socialMediaLinks = DEFAULT_SOCIAL_MEDIA_LINKS,
  colorMode,
  containerProps,
}: RestrictedFooterVariantProps): JSX.Element => {
  const ColorModeWrapper = useMemo(() => {
    if (colorMode === 'dark') {
      return DarkMode
    }
    return Fragment
  }, [colorMode])
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  const styles = useMultiStyleConfig('Footer', { variant: 'full' })

  return (
    <ColorModeWrapper>
      <FooterStylesProvider value={styles}>
        <RestrictedFullFooter.Container {...containerProps}>
          <RestrictedFullFooter.Section>
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              sx={styles.brandContainer}
            >
              <Link
                colorScheme="neutral"
                variant="inline"
                textDecorationLine="none"
                isExternal
                href={appLink}
              >
                <Text textStyle="h4">{appName}</Text>
              </Link>
              {tagline && (
                <Text
                  textStyle="body-2"
                  color="base.content.default"
                  _dark={{
                    color: 'base.content.inverse',
                  }}
                >
                  {tagline}
                </Text>
              )}
            </Stack>
            <Wrap
              flex={1}
              shouldWrapChildren
              overflow="visible"
              spacing={{ base: '1rem', lg: '1.25rem' }}
              direction={{ base: 'column', lg: 'row' }}
              justify={{ base: 'normal', lg: 'flex-end' }}
            >
              {footerLinks?.map(({ label, href }, index) => (
                <Link
                  isExternal
                  sx={styles.link}
                  key={index}
                  colorScheme="neutral"
                  variant="standalone"
                  href={href}
                >
                  {label}
                </Link>
              ))}
            </Wrap>
          </RestrictedFullFooter.Section>
          <Divider my="1.5rem" />
          <RestrictedFullFooter.Section>
            <Flex flexDirection="column">
              <Text
                textStyle="caption-1"
                color="base.content.light"
                _dark={{
                  color: 'base.content.inverse',
                }}
                mb="0.5rem"
              >
                Built by
              </Text>
              <Link
                isExternal
                title={footerIconLink.label}
                colorScheme="neutral"
                mb="2rem"
                href={footerIconLink.href}
              >
                <footerIconLink.Icon width="183px"></footerIconLink.Icon>
              </Link>
            </Flex>

            <Box>
              <Stack
                spacing="1rem"
                direction="row"
                mt="2rem"
                mb="0.5rem"
                justify={{ base: 'normal', lg: 'flex-end' }}
              >
                {socialMediaLinks?.map(({ label, href, Icon }, index) => (
                  <Link
                    key={index}
                    isExternal
                    title={label}
                    w="2rem"
                    href={href}
                    colorScheme="neutral"
                  >
                    <Icon />
                  </Link>
                ))}
              </Stack>
              <Text
                textStyle="legal"
                color="base.content.light"
                _dark={{
                  color: 'base.content.inverse',
                }}
              >
                ©{currentYear} Open Government Products
              </Text>
            </Box>
          </RestrictedFullFooter.Section>
        </RestrictedFullFooter.Container>
      </FooterStylesProvider>
    </ColorModeWrapper>
  )
}

const RestrictedFullFooterContainer = ({
  children,
  ...props
}: RestrictedFooterContainerProps): JSX.Element => {
  const styles = useFooterStyles()
  return (
    <Box as="footer" __css={styles.container} {...props}>
      {children}
    </Box>
  )
}

RestrictedFullFooter.Container = RestrictedFullFooterContainer

const RestrictedFullFooterSection = ({
  children,
  ...props
}: RestrictedFooterContainerProps): JSX.Element => {
  const styles = useFooterStyles()
  return (
    <Flex __css={styles.section} {...props}>
      {children}
    </Flex>
  )
}

RestrictedFullFooter.Section = RestrictedFullFooterSection
