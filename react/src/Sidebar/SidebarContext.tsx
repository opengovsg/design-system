import { createContext, useContext, useMemo } from 'react'
import type { SystemStyleObject } from '@chakra-ui/react'

export interface SidebarContextProps {
  collapsed?: boolean
  children?:
    | React.ReactNode
    | ((props: SidebarContextReturn) => React.ReactNode)
}

export interface SidebarContextReturn {
  collapsed?: boolean
  labelStyles: SystemStyleObject
  containerStyles: SystemStyleObject
}

const SidebarContext = createContext<SidebarContextReturn | undefined>(
  undefined,
)

export const SidebarProvider = ({
  children,
  ...props
}: SidebarContextProps) => {
  const value = useProvideSidebar(props)
  return (
    <SidebarContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

export const useProvideSidebar = ({
  collapsed,
}: SidebarContextProps): SidebarContextReturn => {
  const labelStyles: SystemStyleObject = useMemo(() => {
    if (collapsed) {
      return {
        opacity: 0,
        transitionProperty: 'common',
        transitionDuration: 'normal',
      }
    }
    return {
      opacity: 1,
      transitionProperty: 'common',
      transitionDuration: 'normal',
    }
  }, [collapsed])

  const containerStyles: SystemStyleObject = useMemo(() => {
    if (collapsed) {
      return {
        transition: 'width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
        width: '3.5rem',
      }
    }
    return {
      width: '100%',
      transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
    }
  }, [collapsed])

  return {
    labelStyles,
    containerStyles,
    collapsed,
  }
}
