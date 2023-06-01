import { useMemo } from 'react'
import {
  Box,
  Flex,
  FlexProps,
  Icon,
  ThemingProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import { BxsErrorCircle, BxsInfoCircle } from '~/icons'
import { InfoboxVariant } from '~/theme/components/Infobox'

export interface InfoboxProps extends FlexProps {
  size?: ThemingProps<'Infobox'>['size']
  variant?: InfoboxVariant
  /**
   * The content of the infobox.
   */
  children: React.ReactNode
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
  icon: iconProp,
  size,
  ...flexProps
}: InfoboxProps): JSX.Element => {
  const styles = useMultiStyleConfig('Infobox', { variant, size })

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
      {children}
    </Flex>
  )
}
