import { createContext, FC, PropsWithChildren, useContext } from 'react'

export interface SidebarNestContextProps {
  nested: boolean
}

export type SidebarNestContextReturn = Required<SidebarNestContextProps>

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
