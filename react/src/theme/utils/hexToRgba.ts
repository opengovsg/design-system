/**
 * Function converts hex code to rgba (or rgb) values in an array.
 * @param {string} hex 6 character hex code to convert
 * @param {number} opacity Optional opacity value to use. If not provided, alpha value returned will be 1.
 * @returns rgba values in rgba notation
 * @example hexToRgba('#FFFFFF') // rgba(255, 255, 255, 1)
 * @example hexToRgba('#FFFFFF', 0.5) // rgba(255, 255, 255, 0.5)
 */
export const hexToRgba = (hex: string, opacity?: number) => {
  // Handle case where hex code is passed without the hash
  if (!hex) {
    return 'rgba(0, 0, 0, 1)'
  }
  if (hex[0] !== '#') {
    hex = `#${hex}`
  }
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const a = opacity ? opacity : 1

  return `rgba(${r}, ${g}, ${b}, ${a})`
}
