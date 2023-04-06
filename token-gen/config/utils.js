const MAP_FONT_WEIGHTS = {
  Light: 300,
  Regular: 400,
  Medium: 500,
  "Semi Bold": 600,
  Bold: 700,
};

const pxToRem = (px) => {
  // If have px symbol, remove it.
  const pxValue = String(px).endsWith("px") ? String(px).slice(0, -2) : px;
  // 2 decimal places
  return `${Number(pxValue) / 16}rem`;
};

const percentToEm = (percent) => {
  // 3 decimal places
  if (!percent) return percent;
  // If have percent symbol, remove it.
  const percentValue = String(percent).endsWith("%")
    ? String(percent).slice(0, -1)
    : percent;
  return `${(Number(percentValue) / 100).toFixed(3)}em`;
};

const fontWeightToNumber = (fontWeight) => {
  const fontWeightValue = MAP_FONT_WEIGHTS[fontWeight];
  if (!fontWeightValue) return fontWeight;
  return fontWeightValue;
};

const setFontFamily = (fontFamily) => {
  if (!fontFamily) return undefined;
  if (fontFamily === "IBM Plex Mono") {
    return 'code';
  }
  return 'body';
};

module.exports = {
  pxToRem,
  percentToEm,
  fontWeightToNumber,
  setFontFamily,
};
