// icon:bx-right-arrow-alt | Boxicons https://boxicons.com/ | Atisa

import { chakra } from '@chakra-ui/react'

export const BxRightArrowAlt = chakra(
  (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
      </svg>
    )
  },
)
