import { createContext, FC, PropsWithChildren, useContext } from 'react'

export interface ToolbarContextProps {
  colorScheme?: 'main' | 'neutral'
}

export type ToolbarContextReturn = Required<ToolbarContextProps>

const ToolbarContext = createContext<ToolbarContextReturn | undefined>(
  undefined,
)

export const ToolbarProvider: FC<PropsWithChildren<ToolbarContextProps>> = ({
  children,
  colorScheme = 'main',
}) => {
  return (
    <ToolbarContext.Provider value={{ colorScheme }}>
      {children}
    </ToolbarContext.Provider>
  )
}

export const useToolbarContext = () => {
  const context = useContext(ToolbarContext)
  if (!context) {
    throw new Error('useToolbar must be used within a ToolbarProvider')
  }
  return context
}
