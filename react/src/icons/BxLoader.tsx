// icon:bx-loader | Boxicons https://boxicons.com/ | Atisa

import { chakra } from '@chakra-ui/react'

export const BxLoader = chakra((props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zM19.778 18.364l-1.414 1.414-3.536-3.536 1.414-1.414zM7.758 14.828l1.414 1.414-3.536 3.536-1.414-1.414zM14.828 7.757l3.536-3.535 1.414 1.415-3.536 3.535z" />
    </svg>
  )
})
