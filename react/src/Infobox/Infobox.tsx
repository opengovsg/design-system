import { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import {
  Box,
  Flex,
  FlexProps,
  Icon,
  ThemingProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import { useMdComponents } from '~/hooks/useMdComponents'
import { BxsErrorCircle, BxsInfoCircle } from '~/icons'
import { InfoboxVariant } from '~/theme/components/Infobox'
import type { WithSsr } from '~/types/WithSsr'

export interface InfoboxProps extends FlexProps, WithSsr {
  size?: ThemingProps<'Infobox'>['size']
  variant?: InfoboxVariant
  /**
   * The content of the infobox.
   */
  children: React.ReactNode
  /**
   * Whether to parse the children with markdown before rendering.
   * @preconditions the `children` prop must be a string.
   */
  useMarkdown?: boolean
  /**
   * Icon to show on the left of the infobox.
   * If not specified, a default icon will be used according to the infobox variant.
   * Provide `null` to hide the icon.
   */
  icon?: React.ReactNode
}

export const Infobox = ({
  variant = 'info',
  children,
  useMarkdown = false,
  icon: iconProp,
  size,
  ssr,
  ...flexProps
}: InfoboxProps): JSX.Element => {
  const styles = useMultiStyleConfig('Infobox', { variant, size })

  const mdComponents = useMdComponents({
    ssr,
    props: {
      link: {
        colorScheme: 'neutral',
      },
    },
  })

  const iconToRender = useMemo(() => {
    if (iconProp) {
      return <Box __css={styles.icon}>{iconProp}</Box>
    }
    return (
      <Icon
        as={variant !== 'error' ? BxsInfoCircle : BxsErrorCircle}
        __css={styles.icon}
      />
    )
  }, [iconProp, styles.icon, variant])

  return (
    <Flex sx={styles.messagebox} {...flexProps}>
      {iconToRender}
      {useMarkdown && typeof children === 'string' ? (
        <ReactMarkdown components={mdComponents}>{children}</ReactMarkdown>
      ) : (
        children
      )}
    </Flex>
  )
}
