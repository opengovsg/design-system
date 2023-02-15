import { createContext, FC, PropsWithChildren, useContext } from 'react'
import { ThemingProps } from '@chakra-ui/react'

export interface ToolbarContextProps {
  colorScheme?: 'main' | 'neutral'
  size?: ThemingProps<'Toolbar'>['size']
}

export type ToolbarContextReturn = Required<ToolbarContextProps>

const ToolbarContext = createContext<ToolbarContextReturn | undefined>(
  undefined,
)

export const ToolbarProvider: FC<PropsWithChildren<ToolbarContextProps>> = ({
  children,
  colorScheme = 'main',
  size = 'md',
}) => {
  return (
    <ToolbarContext.Provider value={{ colorScheme, size }}>
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
