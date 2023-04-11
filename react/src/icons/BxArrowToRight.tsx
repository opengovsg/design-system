// icon:bx-arrow-to-right | Boxicons https://boxicons.com/ | Atisa

import { forwardRef } from 'react'

export const BxArrowToRight = forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
      ref={ref}
    >
      <path d="M18 6h2v12h-2zM4 13h8.586l-4.293 4.293 1.414 1.414L16.414 12 9.707 5.293 8.293 6.707 12.586 11H4z" />
    </svg>
  )
})
