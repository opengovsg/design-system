import { createContext, PropsWithChildren, useContext } from 'react'

export interface SidebarContextProps {
  activeId?: string
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)

export const SidebarProvider = ({
  children,
  ...props
}: PropsWithChildren<SidebarContextProps>) => {
  return (
    <SidebarContext.Provider value={props}>{children}</SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useDatePicker must be used within a DatePickerProvider')
  }
  return context
}
