import { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import {
  As,
  Box,
  CloseButton,
  Collapse,
  Flex,
  Icon,
  useDisclosure,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import { useMdComponents } from '~/hooks/useMdComponents'
import { BxsErrorCircle, BxsInfoCircle, BxX } from '~/icons'
import { BannerVariant } from '~/theme/components/Banner'
import type { WithReactMarkdownSsr } from '~/types/WithSsr'

export interface BannerProps extends WithReactMarkdownSsr {
  variant?: BannerVariant
  children: string
  /**
   * Whether to parse the banner's content as markdown.
   * Defaults to `false`.
   * @default false
   */
  useMarkdown?: boolean
  /**
   * Whether to allow collapsing of the banner.
   * Defaults to `true` if `info` variant is used, `false` otherwise.
   */
  isDismissable?: boolean
  /**
   * The icon to use for the banner. Defaults to the variant's icon.
   */
  icon?: As
  /**
   * The close button to use for the banner.
   * Defaults to the variant's close button.
   * If `null`, the close button will not be rendered.
   */
  closeButton?: React.ReactNode
}

export const Banner = ({
  variant = 'info',
  children,
  useMarkdown = false,
  isDismissable: isDismissableProp,
  icon: iconProp,
  closeButton,
  ssr,
  mdIsExternalLinkFn,
}: BannerProps): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: true,
  })

  const styles = useMultiStyleConfig('Banner', { variant })

  const mdComponents = useMdComponents({
    styles: {
      link: styles.link,
    },
    ssr,
    props: {
      link: {
        isExternalFn: mdIsExternalLinkFn,
      },
    },
  })
  const iconToUse = useMemo(() => {
    if (iconProp) {
      return iconProp
    }
    return variant === 'info' ? BxsInfoCircle : BxsErrorCircle
  }, [iconProp, variant])

  const isDismissable = useMemo(() => {
    if (isDismissableProp !== undefined) {
      return isDismissableProp
    }
    return variant === 'info'
  }, [isDismissableProp, variant])

  const closeButtonRendered = useMemo(() => {
    if (!isDismissable) return null
    if (closeButton !== undefined) closeButton
    return (
      <CloseButton children={<BxX />} onClick={onToggle} sx={styles.close} />
    )
  }, [closeButton, isDismissable, onToggle, styles.close])

  return (
    <Collapse in={isOpen} animateOpacity>
      <Box __css={styles.banner}>
        <Flex sx={styles.item}>
          <Flex>
            <Icon as={iconToUse} __css={styles.icon} />
            {useMarkdown ? (
              <ReactMarkdown components={mdComponents}>
                {children}
              </ReactMarkdown>
            ) : (
              children
            )}
          </Flex>
          {closeButtonRendered}
        </Flex>
      </Box>
    </Collapse>
  )
}
