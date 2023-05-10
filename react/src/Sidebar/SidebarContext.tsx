import { createContext, FC, PropsWithChildren, useContext } from 'react'
import { createStylesContext } from '@chakra-ui/react'

const [SidebarStylesProvider, useSidebarStyles] = createStylesContext('Sidebar')

export { SidebarStylesProvider, useSidebarStyles }

export interface SidebarNestContextProps {
  nested: boolean
}

export type SidebarNestContextReturn = SidebarNestContextProps

const SidebarNestContext = createContext<SidebarNestContextReturn | undefined>(
  undefined,
)

export const SidebarNestProvider: FC<
  PropsWithChildren<SidebarNestContextProps>
> = ({ children, nested }) => {
  return (
    <SidebarNestContext.Provider value={{ nested }}>
      {children}
    </SidebarNestContext.Provider>
  )
}

export const useSidebarNestContext = (): SidebarNestContextReturn => {
  const context = useContext(SidebarNestContext)
  if (!context) {
    return {
      nested: false,
    }
  }
  return context
}

export interface SidebarContextProps {
  reduceMotion?: boolean
}

export type SidebarContextReturn = SidebarContextProps

const SidebarContext = createContext<SidebarContextReturn | undefined>(
  undefined,
)

export const SidebarProvider: FC<PropsWithChildren<SidebarContextProps>> = ({
  children,
  reduceMotion = false,
}) => {
  return (
    <SidebarContext.Provider value={{ reduceMotion }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = (): SidebarContextReturn => {
  const context = useContext(SidebarContext)
  if (!context) {
    return {
      reduceMotion: false,
    }
  }
  return context
}
