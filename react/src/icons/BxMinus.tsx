import { chakra } from '@chakra-ui/react'
// icon:bx-minus | Boxicons https://boxicons.com/ | Atisa
/** This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/) */
export const BxMinus = chakra((props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M5 11h14v2H5z" />
    </svg>
  )
})
