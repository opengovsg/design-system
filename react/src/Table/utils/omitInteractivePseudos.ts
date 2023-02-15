import { DOMAttributes } from 'react'
import { SystemStyleObject } from '@chakra-ui/react'
import { omit } from 'lodash'

type InteractableProps = Pick<
  DOMAttributes<any>,
  | 'onClick'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'onKeyPress'
  | 'onMouseDown'
  | 'onMouseUp'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onMouseMove'
  | 'onMouseOver'
  | 'onMouseOut'
  | 'onFocus'
  | 'onBlur'
>

const isInteractive = (props: InteractableProps) => {
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
  props: InteractableProps,
  styles: SystemStyleObject,
): SystemStyleObject {
  if (!isInteractive(props)) {
    return omit(styles, INTERACTIVE_PSEUDO_PROPS)
  }
  return styles
}
