import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
  ComponentWithAs as _,
  createStylesContext,
  forwardRef,
  Icon,
  IconProps,
  useStyleConfig,
} from '@chakra-ui/react'

const [BadgeStylesProvider, useBadgeStyles] = createStylesContext('Badge')

export { useBadgeStyles }

export interface BadgeProps extends ChakraBadgeProps {}

export const Badge = (props: BadgeProps): JSX.Element => {
  const styles = useStyleConfig('Badge', props)
  return (
    <BadgeStylesProvider value={{ styles }}>
      <ChakraBadge {...props} />
    </BadgeStylesProvider>
  )
}

Badge.displayName = 'Badge'

export const BadgeLeftIcon = forwardRef<IconProps, 'svg'>((props, ref) => {
  const { styles } = useBadgeStyles()
  return (
    <Icon
      ref={ref}
      color={styles.accentColor as string}
      verticalAlign="top"
      marginEnd="0.25rem"
      {...props}
    />
  )
})

BadgeLeftIcon.displayName = 'BadgeLeftIcon'

export const BadgeRightIcon = forwardRef<IconProps, 'svg'>((props, ref) => {
  const { styles } = useBadgeStyles()
  return (
    <Icon
      ref={ref}
      color={styles.accentColor as string}
      verticalAlign="top"
      marginStart="0.25rem"
      {...props}
    />
  )
})

BadgeRightIcon.displayName = 'BadgeRightIcon'
