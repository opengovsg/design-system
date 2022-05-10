// icon:bx-chevron-down | Boxicons https://boxicons.com/ | Atisa

import { chakra } from '@chakra-ui/react'

export const BxChevronDown = chakra((props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
    </svg>
  )
})
