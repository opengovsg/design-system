import { PropsWithChildren } from 'react'
import { chakra, List } from '@chakra-ui/react'

export const SidebarContainer = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return (
    <chakra.nav>
      <List>{children}</List>
    </chakra.nav>
  )
}
