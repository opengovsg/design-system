import { Divider, Flex, Link, Stack, Wrap } from '@chakra-ui/react'

import {
  RestrictedFooterContainerProps,
  RestrictedFooterVariantProps,
} from './common/types'

interface RestrictedCompactFooterProps extends RestrictedFooterVariantProps {
  /** Logo to display on the compact footer. Will use @param appName if not provided. */
  brandLogo?: React.ReactNode
  compactMonochromeLogos?: boolean
}

/** Desktop only compact footer variant */
export const RestrictedCompactFooter = ({
  appName,
  footerIconLink,
  textColorScheme = 'secondary',
  logoTextColor = 'black',
  footerLinks,
  compactMonochromeLogos,
  brandLogo,
  appLink,
  containerProps,
}: RestrictedCompactFooterProps): JSX.Element => {
  return (
    <RestrictedCompactFooter.Container {...containerProps}>
      <Stack direction="row" h="2.25rem" align="center" spacing="2rem">
        <Link
          colorScheme={compactMonochromeLogos ? 'white' : textColorScheme}
          isExternal
          title="Link to application homepage"
          href={appLink}
        >
          {brandLogo ?? appName}
        </Link>
        <Divider
          orientation="vertical"
          color={compactMonochromeLogos ? 'neutral.300' : undefined}
        />
        <Link
          isExternal
          title={footerIconLink.label}
          href={footerIconLink.href}
        >
          <footerIconLink.Icon
            logoFill={compactMonochromeLogos ? 'white' : undefined}
            textFill={compactMonochromeLogos ? 'white' : logoTextColor}
            height="1.5rem"
          />
        </Link>
      </Stack>
      <Wrap
        flex={1}
        shouldWrapChildren
        textStyle="body-2"
        spacing="1.5rem"
        justify="flex-end"
      >
        {footerLinks?.map(({ label, href }, index) => (
          <Link
            isExternal
            m="-0.25rem"
            key={index}
            variant="standalone"
            w="fit-content"
            href={href}
            colorScheme={textColorScheme}
          >
            {label}
          </Link>
        ))}
      </Wrap>
    </RestrictedCompactFooter.Container>
  )
}

RestrictedCompactFooter.Container = ({
  children,
  ...props
}: RestrictedFooterContainerProps): JSX.Element => {
  return (
    <Flex
      align="center"
      width="100%"
      justify="space-between"
      flexDir="row"
      as="footer"
      bg="primary.100"
      {...props}
    >
      {children}
    </Flex>
  )
}
