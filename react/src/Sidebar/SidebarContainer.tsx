import { PropsWithChildren } from 'react'
import { chakra, ThemingProps, useMultiStyleConfig } from '@chakra-ui/react'

import { SidebarProvider, SidebarStylesProvider } from './SidebarContext'

interface SidebarContainerProps
  extends ThemingProps<'Sidebar'>,
    PropsWithChildren {
  reduceMotion?: boolean
  'aria-label'?: string
}

export const SidebarContainer = ({
  children,
  reduceMotion = false,
  'aria-label': ariaLabel,
  ...props
}: SidebarContainerProps): JSX.Element => {
  const styles = useMultiStyleConfig('Sidebar', props)
  return (
    <SidebarProvider reduceMotion={reduceMotion}>
      <SidebarStylesProvider value={styles}>
        <chakra.nav aria-label={ariaLabel}>
          <chakra.ul __css={styles.section}>{children}</chakra.ul>
        </chakra.nav>
      </SidebarStylesProvider>
    </SidebarProvider>
  )
}
