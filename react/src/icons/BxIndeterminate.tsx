// source from chakra indetermiante icon here https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/checkbox/src/checkbox-icon.tsx
export const BxIndeterminate = (
  props: React.SVGProps<SVGSVGElement>,
): JSX.Element => {
  return (
    <svg
      width="1.2em"
      viewBox="0 0 24 24"
      style={{ stroke: 'currentColor', strokeWidth: 4 }}
      {...props}
    >
      <line x1="21" x2="3" y1="12" y2="12" />
    </svg>
  )
}
