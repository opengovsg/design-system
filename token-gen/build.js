// For each theme in tokens/transformed directory, run Style Dictionary build.
const {
  camelCase,
  groupBy,
  get,
  set,
  isObject,
  setWith,
  has,
  some,
  omit,
} = require("lodash");
const JSON5 = require("json5");
const path = require("path");
const fs = require("fs");
const tinycolor = require("tinycolor2");
const StyleDictionary = require("style-dictionary");
const {
  fontWeightToNumber,
  percentToEm,
  pxToRem,
  setFallbackFonts,
} = require("./config/utils");

const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

const designSystemFormatter = ({ dictionary, platform, options, file }) => {
  // Recursively replace all nested objects with "value" key with the value of the "value" key.
  const replaceNestedObjects = (obj) => {
    Object.keys(obj).forEach((key) => {
      if (isObject(obj[key]) && obj[key].value !== undefined) {
        const token = obj[key];
        let value = token.value;
        // if (dictionary.usesReference(token.original.value)) {
        //   // Keep references instead of replacement values.
        //   value = token.original.value;
        // }
        obj[key] = value;
      } else if (isObject(obj[key])) {
        replaceNestedObjects(obj[key]);
      }
    });
  };

  replaceNestedObjects(dictionary.tokens);

  let output = fileHeader({ file });
  const tokens = Object.keys(dictionary.tokens);
  if (tokens.length === 1) {
    output +=
      `export const ${options.exportName} =  ${JSON5.stringify(
        dictionary.tokens[tokens[0]],
        { space: 2, quote: '"' }
      )}` + ";\n";
  } else {
    // Split object into multiple objects based on the key.
    // E.g. { spacing: {...}, color: {...} } => const spacing: {...}; const color: {...};
    output +=
      tokens
        .map((key) => {
          return `const ${camelCase(key)} = ${JSON5.stringify(
            dictionary.tokens[key],
            { space: 2, quote: '"' }
          )}`;
        })
        .join("\n\n") +
      "\n\n" +
      "export const " +
      options.exportName +
      " = {\n" +
      Object.keys(dictionary.tokens)
        .map((k) => `  ${camelCase(k)}`)
        .join(", \n") +
      "\n};\n";
  }

  // Output the dictionary as a file.
  return output;
};

// Suppress nested collision output.
designSystemFormatter.nested = true;

StyleDictionary.registerFormat({
  name: "typescript/design-system",
  formatter: designSystemFormatter,
});

// Convert shadow to css format.
StyleDictionary.registerTransform({
  name: "shadow/design-system",
  type: "value",
  matcher: (prop) => prop.type === "boxShadow",
  transformer: (prop) => {
    // destructure shadow values from original token value
    const { x, y, blur, spread, color, alpha } = prop.original.value;

    // convert hex code to rgba string
    const shadowColor = tinycolor(color);
    if (alpha) {
      shadowColor.setAlpha(alpha);
    }

    shadowColor.toRgbString();

    return `${x}px ${y}px ${blur}px ${spread}px ${shadowColor}`;
  },
});

// Convert textStyles to ChakraUI object.
StyleDictionary.registerTransform({
  name: "textStyles/design-system",
  type: "value",
  matcher: (prop) => prop.type === "typography",
  transformer: (token) => {
    const omitValues = omit(token.value, [
      "paragraphSpacing",
      "textCase",
      "fontFamily",
    ]);

    const {
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,
      textCase,
      paragraphSpacing,
      textDecoration,
      fontFamily,
    } = token.value;

    const fontSizeToRem = pxToRem(fontSize);
    const lineHeightToRem = pxToRem(lineHeight);
    const fontWeightNumValue = fontWeightToNumber(fontWeight);
    const letterSpacingEmValue = percentToEm(letterSpacing);

    return {
      ...omitValues,
      // Trebuchet MS is the closest height and width to Inter for best FOUT (flash of unstyled text) handling.
      fontFamily: setFallbackFonts(fontFamily),
      textTransform: textCase === "none" ? undefined : textCase,
      textDecoration: textDecoration === "none" ? undefined : textDecoration,
      fontSize: fontSizeToRem,
      fontWeight: fontWeightNumValue,
      lineHeight: lineHeightToRem,
      letterSpacing: letterSpacingEmValue,
    };
  },
});

StyleDictionary.registerTransform({
  name: "size/pxToRem",
  type: "value",
  matcher: (prop) =>
    ["lineHeights", "spacing", "fontSizes"].includes(prop.type),
  transformer: (token) => pxToRem(token.value),
});

StyleDictionary.registerTransform({
  name: "size/fontWeightToNumber",
  type: "value",
  matcher: (prop) => prop.type === "fontWeights",
  transformer: (token) => fontWeightToNumber(token.value),
});

StyleDictionary.registerTransform({
  name: "size/percentToEm",
  type: "value",
  matcher: (prop) => prop.type === "letterSpacing",
  transformer: (token) => percentToEm(token.value),
});

// Convert shadow to css format.
StyleDictionary.registerTransform({
  name: "color/rbgaWithHex",
  type: "value",
  matcher: (prop) => prop.type === "color",
  transformer: (token) => {
    const color = tinycolor(token.value);
    if (color.getAlpha() === 1) {
      return token.value;
    }
    return color.toRgbString();
  },
});

function getStyleDictionaryConfig(src, name) {
  return {
    source: [`tokens/transformed/${src}`],
    platforms: {
      javascript: {
        transforms: [
          "shadow/design-system",
          "size/percentToEm",
          "size/pxToRem",
          "size/fontWeightToNumber",
          "textStyles/design-system",
          "color/rbgaWithHex",
        ],
        buildPath: `themes/${name}/`,
        files: [
          {
            destination: "colours.ts",
            filter: (token) => token.type === "color",
            format: "typescript/design-system",
            options: {
              exportName: "colours",
            },
          },
          {
            destination: "typography.ts",
            filter: (token) => {
              switch (token.type) {
                case "fontFamilies":
                case "fontSizes":
                case "fontWeights":
                case "lineHeights":
                case "letterSpacing":
                case "paragraphSpacing":
                  return true;
                default:
                  return false;
              }
            },
            format: "typescript/design-system",
            options: {
              exportName: "typography",
            },
          },
          {
            destination: "textStyles.ts",
            filter: (token) => {
              if (token.type !== "typography") return false;
              switch (token.type) {
                case "fontFamilies":
                case "fontSizes":
                case "fontWeights":
                case "lineHeights":
                case "letterSpacing":
                case "paragraphSpacing":
                  return false;
                default:
                  return true;
              }
            },
            format: "typescript/design-system",
            options: {
              exportName: "textStyles",
            },
          },

          {
            destination: "spacing.ts",
            filter: (token) => token.type === "spacing",
            format: "typescript/design-system",
            options: {
              exportName: "spacing",
            },
          },
          {
            destination: "shadows.ts",
            filter: (token) => token.type === "boxShadow",
            format: "typescript/design-system",
            options: {
              exportName: "shadows",
            },
          },
        ],
      },
    },
  };
}

console.log("Build started...");

const themes = fs.readdirSync("./tokens/transformed/");

// Process each theme to its own theme directory.
themes.map((themeAddr) => {
  const theme = path.parse(themeAddr).name.replace(" theme", "");
  console.log("\n==============================================");
  console.log(`\nProcessing theme: [${theme}]`);

  const StyleDictionaryExtended = StyleDictionary.extend(
    getStyleDictionaryConfig(themeAddr, theme)
  );

  StyleDictionaryExtended.buildPlatform("javascript");

  console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");
