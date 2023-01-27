import {
  As,
  Button,
  ButtonProps,
  ComponentWithAs,
  createStylesContext,
  forwardRef,
  HStack,
  Icon,
  Text,
  TextProps,
  ThemingProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

const [TileStylesProvider, useTileStyles] = createStylesContext('Tile')

export interface TileProps
  extends Omit<
    ButtonProps,
    | 'colorScheme'
    | 'iconSpacing'
    | 'leftIcon'
    | 'rightIcon'
    | 'loadingText'
    | 'spinner'
    | 'spinnerPlacement'
    | 'title'
    | 'variant'
    | 'isActive'
  > {
  // The typing here is to satisfy the ts compiler
  // because otherwise, it will complain about assigning null to the as prop
  /**
   * The icon that should be displayed on the tile
   */
  icon?: As

  /**
   * The components to be displayed
   * Refer here for correct typing: https://stackoverflow.com/questions/53688899/typescript-and-react-children-type
   */
  children: React.ReactNode

  /**
   * The badge, if any, to be displayed alongside the title
   */
  badge?: JSX.Element
  /**
   * The variant of the tile - whether it is complex (many elements) or simple (title and subtitle only).
   */
  variant: ThemingProps<'Tile'>['variant']

  /**
   * Whether the tile is selected or not
   */
  isSelected?: boolean
}

type TileWithParts = ComponentWithAs<'button', TileProps> & {
  Subtitle: typeof TileSubtitle
  Title: typeof TileTitle
  Text: typeof TileText
}

export const Tile = forwardRef<TileProps, 'button'>(
  ({ badge, icon, children, variant, isSelected, ...props }, ref) => {
    const styles = useMultiStyleConfig('Tile', { ...props, variant })
    return (
      // Ref passed into the component as a whole so that it can be focused
      <TileStylesProvider value={styles}>
        <Button
          variant="unstyled"
          sx={styles.container}
          isActive={isSelected}
          ref={ref}
          {...props}
        >
          <HStack spacing="1rem">
            {icon && <Icon __css={styles.icon} as={icon} />}
            {badge}
          </HStack>
          {children}
        </Button>
      </TileStylesProvider>
    )
  },
) as TileWithParts

const TileTitle = (props: TextProps): JSX.Element => {
  const styles = useTileStyles()
  // Allow consumers to override default style props with their own styling
  return <Text sx={styles.title} {...props} />
}

const TileSubtitle = (props: TextProps): JSX.Element => {
  const styles = useTileStyles()
  // Allow consumers to override default style props with their own styling
  return <Text sx={styles.subtitle} {...props} />
}

const TileText = (props: TextProps): JSX.Element => {
  const styles = useTileStyles()
  // Allow consumers to override default style props with their own styling
  return <Text sx={styles.text} {...props} />
}

Tile.displayName = 'Tile'

Tile.Title = TileTitle
Tile.Subtitle = TileSubtitle
Tile.Text = TileText
