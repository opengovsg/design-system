import React from 'react'
import {
  Box,
  chakra,
  Collapse,
  Flex,
  Icon,
  Stack,
  Text,
  useDisclosure,
  VisuallyHidden,
} from '@chakra-ui/react'

import { useIsMobile } from '~/hooks/useIsMobile'
import { BxChevronDown, BxChevronUp, BxsBank, BxsLockAlt } from '~/icons'
import { Link } from '~/Link'
import { WithSsr } from '~/types/WithSsr'

import { RestrictedGovtMastheadIcon } from './RestrictedGovtMastheadIcon'
import { RestrictedGovtMastheadItem } from './RestrictedGovtMastheadItem'

export interface RestrictedGovtMastheadProps extends WithSsr {
  defaultIsOpen?: boolean
}

interface RestrictedGovtMastheadChildrenProps {
  isOpen: boolean
  isMobile: boolean
  onToggle: () => void
  children: React.ReactNode
}

interface RestrictedHeaderBarProps extends RestrictedGovtMastheadChildrenProps {
  /**
   * ID of the expandable section for accessibility.
   */
  ariaControlId: string
}

const RestrictedHeaderBar = ({
  isMobile,
  children,
  onToggle,
  isOpen,
  ariaControlId,
}: RestrictedHeaderBarProps): JSX.Element => {
  const styleProps = {
    bg: 'grey.50',
    py: { base: '0.5rem', md: '0.375rem' },
    px: { base: '1.5rem', md: '1.75rem', lg: '2rem' },
    textStyle: { base: 'legal', md: 'caption-2' },
    display: 'flex',
    width: '100%',
  }

  // Mobile
  if (isMobile) {
    return (
      <chakra.button
        aria-controls={ariaControlId}
        aria-describedby="masthead-aria"
        aria-expanded={isOpen}
        _focus={{
          boxShadow: '0 0 0 2px inset var(--chakra-colors-primary-500)',
        }}
        {...styleProps}
        onClick={onToggle}
      >
        <VisuallyHidden id="masthead-aria">
          {isOpen
            ? 'Collapse masthead'
            : 'Expand masthead to find out how to identify an official government website'}
        </VisuallyHidden>
        {children}
      </chakra.button>
    )
  }

  // Non-mobile
  return <Flex {...styleProps}>{children}</Flex>
}

const RestrictedHowToIdentify = ({
  isOpen,
  isMobile,
  children,
  onToggle,
}: RestrictedGovtMastheadChildrenProps): JSX.Element => {
  // Mobile
  if (isMobile) {
    return (
      <Text
        aria-hidden
        as="span"
        color="brand.primary.500"
        textDecorationLine="underline"
        display="flex"
        alignItems="center"
      >
        How to identify {children}
      </Text>
    )
  }

  // Non-mobile
  return (
    <Link
      as="button"
      tabIndex={0}
      aria-label={
        isOpen
          ? 'Collapse masthead'
          : 'Expand masthead to find out how to identify an official government website'
      }
      onClick={onToggle}
    >
      How to identify {children}
    </Link>
  )
}

export const RestrictedGovtMasthead = ({
  defaultIsOpen,
  ssr,
}: RestrictedGovtMastheadProps): JSX.Element => {
  const { onToggle, isOpen } = useDisclosure({ defaultIsOpen })
  const isMobile = useIsMobile({ ssr })

  const ariaControlId = 'govt-masthead-expandable'

  return (
    <Box>
      <RestrictedHeaderBar
        onToggle={onToggle}
        isMobile={isMobile}
        isOpen={isOpen}
        ariaControlId={ariaControlId}
      >
        <Box aria-hidden>
          <RestrictedGovtMastheadIcon
            aria-hidden
            fontSize="1rem"
            mr={{ base: '0.25rem', lg: '0.5rem' }}
            my={{ base: '0px', md: '2px' }}
          />
        </Box>
        <Flex alignItems="center" flexWrap="wrap">
          <Text textAlign="initial" my="2px">
            A Singapore Government Agency Website&ensp;
          </Text>
          <RestrictedHowToIdentify
            isOpen={isOpen}
            onToggle={onToggle}
            isMobile={isMobile}
          >
            <Icon
              aria-hidden
              as={isOpen ? BxChevronUp : BxChevronDown}
              fontSize={{ base: '1rem', md: '1.25rem' }}
            />
          </RestrictedHowToIdentify>
        </Flex>
      </RestrictedHeaderBar>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: '1rem', md: '4.5rem', lg: '9.5rem' }}
          bg="grey.50"
          px="2rem"
          py={{ base: '1.5rem', md: '2.25rem', lg: '2.75rem' }}
          textStyle={{ base: 'caption-2', lg: 'body-1' }}
          id={ariaControlId}
          aria-hidden={!isOpen}
        >
          <RestrictedGovtMastheadItem
            icon={BxsBank}
            header="Official website links end with .gov.sg"
          >
            <Box textStyle={{ base: 'caption-2', md: 'body-1' }}>
              <Text as="span">
                Government agencies communicate via <b>.gov.sg</b> websites
                (e.g. go.gov.sg/open).{' '}
              </Text>
              <Link
                aria-label="Click to open a list of trusted sites in a new window"
                href="https://go.gov.sg/trusted-sites"
                isExternal
              >
                Trusted websites
              </Link>
            </Box>
          </RestrictedGovtMastheadItem>
          <RestrictedGovtMastheadItem
            icon={BxsLockAlt}
            header="Secure websites use HTTPS"
          >
            <Box textStyle={{ base: 'caption-2', md: 'body-1' }}>
              <Text as="span">Look for a lock (</Text>
              <Icon
                aria-hidden
                as={BxsLockAlt}
                height={{ base: '1rem', md: '1.5rem' }}
                verticalAlign="bottom"
              />
              <Text as="span">
                ) or https:// as an added precaution.
                <br></br>Share sensitive information only on official, secure
                websites.
              </Text>
            </Box>
          </RestrictedGovtMastheadItem>
        </Stack>
      </Collapse>
    </Box>
  )
}
