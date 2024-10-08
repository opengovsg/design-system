/**
 * Adapted from
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/switch/src/switch.tsx
 * so as to support inserting icons in the switch thumb (the circular part).
 */

import { useMemo } from 'react'
import {
  chakra,
  ComponentWithAs as _,
  forwardRef,
  HTMLChakraProps,
  Icon,
  omitThemingProps,
  SystemProps,
  SystemStyleObject,
  ThemingProps,
  useCheckbox,
  UseCheckboxProps,
  useMultiStyleConfig,
  usePrefersReducedMotion,
} from '@chakra-ui/react'
import { cx, dataAttr } from '@chakra-ui/utils'
import { keyframes } from '@emotion/react'

import { BxCheck, BxLoader, BxLockAlt, BxX } from '~/icons'

export interface SwitchProps
  extends Omit<UseCheckboxProps, 'isIndeterminate'>,
    Omit<HTMLChakraProps<'label'>, keyof UseCheckboxProps>,
    ThemingProps<'Switch'> {
  /**
   * The spacing between the switch and its label text
   * @default 0.5rem
   * @type SystemProps["marginLeft"]
   */
  spacing?: SystemProps['marginLeft']
  /**
   * Icon for disabled switch; defaults to lock-alt.
   */
  disabledIcon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  /**
   * Icon for checked switch; defaults to BxCheck.
   */
  checkedIcon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  /**
   * Icon for unchecked switch; defaults to BxLockAlt.
   */
  uncheckedIcon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element

  /**
   * Icon for loading switch; defaults to BxLoader.
   */
  loadingIcon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element

  /**
   * Whether the switch is in an indeterminate loading state.
   */
  isLoading?: boolean
}

export const Switch = forwardRef<SwitchProps, 'input'>(
  (
    {
      disabledIcon = BxLockAlt,
      checkedIcon = BxCheck,
      uncheckedIcon = BxX,
      loadingIcon = BxLoader,
      isLoading,
      ...props
    },
    ref,
  ) => {
    const styles = useMultiStyleConfig('Switch', props)
    const prefersReducedMotion = usePrefersReducedMotion()

    const {
      spacing = '0.5rem',
      children,
      ...ownProps
    } = omitThemingProps(props)

    const {
      state,
      getInputProps,
      getCheckboxProps,
      getRootProps,
      getLabelProps,
    } = useCheckbox({ ...ownProps, isReadOnly: isLoading })

    const containerStyles: SystemStyleObject = useMemo(
      () => ({
        display: 'inline-block',
        position: 'relative',
        verticalAlign: 'middle',
        lineHeight: 0,
        ...styles.container,
      }),
      [styles.container],
    )

    const trackStyles: SystemStyleObject = useMemo(
      () => ({
        display: 'inline-flex',
        flexShrink: 0,
        justifyContent: 'flex-start',
        boxSizing: 'content-box',
        cursor: 'pointer',
        ...styles.track,
      }),
      [styles.track],
    )

    const labelStyles: SystemStyleObject = useMemo(
      () => ({
        userSelect: 'none',
        marginStart: spacing,
        ...styles.label,
      }),
      [spacing, styles.label],
    )

    const ThumbIcon = useMemo(() => {
      if (isLoading) return loadingIcon
      if (state.isDisabled) return disabledIcon
      return state.isChecked ? checkedIcon : uncheckedIcon
    }, [
      checkedIcon,
      disabledIcon,
      isLoading,
      loadingIcon,
      state.isChecked,
      state.isDisabled,
      uncheckedIcon,
    ])

    const iconComponent = useMemo(() => {
      let animation: string | undefined

      if (isLoading) {
        const spin = keyframes({
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        })
        animation = prefersReducedMotion
          ? undefined
          : `${spin} 2.5s linear infinite`
      }

      return (
        <Icon
          as={ThumbIcon}
          animation={animation}
          __css={styles.thumbIcon}
          data-checked={dataAttr(state.isChecked)}
        />
      )
    }, [
      ThumbIcon,
      isLoading,
      prefersReducedMotion,
      state.isChecked,
      styles.thumbIcon,
    ])

    return (
      <chakra.label
        {...getRootProps()}
        className={cx('chakra-switch', props.className)}
        __css={containerStyles}
        data-group
      >
        <input className="chakra-switch__input" {...getInputProps({}, ref)} />
        <chakra.span
          {...getCheckboxProps()}
          className="chakra-switch__track"
          __css={trackStyles}
        >
          <chakra.span
            __css={styles.thumb}
            className="chakra-switch__thumb"
            data-checked={dataAttr(state.isChecked)}
            data-hover={dataAttr(state.isHovered)}
          >
            {iconComponent}
          </chakra.span>
        </chakra.span>
        {children && (
          <chakra.span
            className="chakra-switch__label"
            {...getLabelProps()}
            __css={labelStyles}
          >
            {children}
          </chakra.span>
        )}
      </chakra.label>
    )
  },
)

Switch.displayName = 'Switch'
