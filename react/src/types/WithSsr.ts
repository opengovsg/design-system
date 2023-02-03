export type WithSsr = {
  /**
   * Whether the component is being rendered in an SSR environment.
   * Set to true if rendering in a SSR environment.
   * @default false
   */
  ssr?: boolean
}

export interface WithReactMarkdownSsr extends WithSsr {
  /**
   * If provided, will be used to determine if links created from markdown are external links.
   * @example
   * ```tsx
   * const isExternal = (url: string) => {
   *   try {
   *     const parsed = new URL(url)
   *     // if in a non-ssr environment, you can use window.location.hostname
   *     return parsed.hostname !== 'window.location.hostname'
   *     // If in a SSR environment, you can use the request object
   *     // return parsed.hostname !== req.hostname
   *   } catch (e) {
   *     return false
   *   }
   * }
   * ```
   */
  mdIsExternalLinkFn?: (url: string) => boolean
}
