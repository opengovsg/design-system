import { Fragment, useMemo } from 'react'
import {
  Box,
  DarkMode,
  Divider,
  Link,
  Stack,
  useMultiStyleConfig,
  Wrap,
} from '@chakra-ui/react'

import {
  RestrictedFooterContainerProps,
  RestrictedFooterVariantProps,
} from './common/types'
import {
  FooterStylesProvider,
  useFooterStyles,
} from './RestrictedFooterStyleProvider'

interface RestrictedCompactFooterProps extends RestrictedFooterVariantProps {
  /** Logo to display on the compact footer. Will use @param appName if not provided. */
  brandLogo?: React.ReactNode
}

/** Desktop only compact footer variant */
export const RestrictedCompactFooter = ({
  appName,
  footerIconLink,
  footerLinks,
  colorMode,
  brandLogo,
  appLink,
  containerProps,
}: RestrictedCompactFooterProps): JSX.Element => {
  const ColorModeWrapper = useMemo(() => {
    if (colorMode === 'dark') {
      return DarkMode
    }
    return Fragment
  }, [colorMode])
  const styles = useMultiStyleConfig('Footer', {
    variant: 'compact',
  })

  return (
    <ColorModeWrapper>
      <FooterStylesProvider value={styles}>
        <RestrictedCompactFooter.Container {...containerProps}>
          <Stack direction="row" sx={styles.brandContainer}>
            <Link
              colorScheme="neutral"
              variant="inline"
              textDecorationLine="none"
              isExternal
              title="Link to application homepage"
              href={appLink}
            >
              {brandLogo ?? appName}
            </Link>
            <Divider orientation="vertical" variant="medium" />
            <Link
              isExternal
              title={footerIconLink.label}
              colorScheme="neutral"
              href={footerIconLink.href}
            >
              <footerIconLink.Icon height="1.5rem" />
            </Link>
          </Stack>
          <Wrap
            flex={1}
            overflow="visible"
            shouldWrapChildren
            spacingX="1.5rem"
            justify="flex-end"
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
        </RestrictedCompactFooter.Container>
      </FooterStylesProvider>
    </ColorModeWrapper>
  )
}

const RestrictedCompactFooterContainer = ({
  children,
  ...props
}: RestrictedFooterContainerProps): JSX.Element => {
  const styles = useFooterStyles()

  return (
    <Box __css={styles.container} {...props}>
      {children}
    </Box>
  )
}

RestrictedCompactFooter.Container = RestrictedCompactFooterContainer
