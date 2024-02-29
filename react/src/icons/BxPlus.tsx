import { chakra } from '@chakra-ui/react'
// icon:bx-plus | Boxicons https://boxicons.com/ | Atisa
/** This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/) */
export const BxPlus = chakra((props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
    </svg>
  )
})
