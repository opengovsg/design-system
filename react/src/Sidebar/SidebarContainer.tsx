import { PropsWithChildren } from 'react'
import { chakra, ThemingProps, useMultiStyleConfig } from '@chakra-ui/react'

import { SidebarStylesProvider } from './SidebarStyleProvider'

interface SidebarContainerProps
  extends ThemingProps<'Sidebar'>,
    PropsWithChildren {}

export const SidebarContainer = ({
  children,
  ...props
}: SidebarContainerProps): JSX.Element => {
  const styles = useMultiStyleConfig('Sidebar', props)
  return (
    <SidebarStylesProvider value={styles}>
      <chakra.nav>
        <chakra.ul __css={styles.section}>{children}</chakra.ul>
      </chakra.nav>
    </SidebarStylesProvider>
  )
}
