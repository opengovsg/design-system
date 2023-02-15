import { SystemStyleObject, TableProps } from '@chakra-ui/react'
import { omit } from 'lodash'

const isInteractive = (props: TableProps) => {
  return (
    !!props.onClick ||
    !!props.onKeyDown ||
    !!props.onKeyUp ||
    !!props.onKeyPress ||
    !!props.onMouseDown ||
    !!props.onMouseUp ||
    !!props.onMouseEnter ||
    !!props.onMouseLeave ||
    !!props.onMouseMove ||
    !!props.onMouseOver ||
    !!props.onMouseOut ||
    !!props.onFocus ||
    !!props.onBlur
  )
}

const INTERACTIVE_PSEUDO_PROPS = ['_active', '_hover', '_pressed', '_selected']

/**
 * Function to omit interactive pseudos from a style object if the object is not
 *  interactive (i.e. if it does not have an `onClick`, `onKeyDown` props, etc)
 */
export function omitInteractivePseudos(
  props: TableProps,
  styles: Record<string, SystemStyleObject>,
): Record<string, SystemStyleObject> {
  if (!isInteractive(props)) {
    return omit(styles, INTERACTIVE_PSEUDO_PROPS)
  }
  return styles
}
