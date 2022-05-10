// icon:bx-trash | Boxicons https://boxicons.com/ | Atisa

import { chakra } from '@chakra-ui/react'

export const BxTrash = chakra((props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        d="M17.004 20l-.001-12h-10v12h10.001zm-4.001-10h2v8h-2v-8zm-4 0h2v8h-2v-8zm0-6h6v2h-6z"
      />
      <path d="M5.003 20c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2h-6c-1.103 0-2 .897-2 2v2h-4v2h2v12zm4-16h6v2h-6V4zm-1 4h9l.001 12H7.003V8h1z" />
      <path d="M9.003 10h2v8h-2zm4 0h2v8h-2z" />
    </svg>
  )
})
