const { camelCase, groupBy, get, set, isObject, setWith } = require("lodash");
const tinycolor = require("tinycolor2");

const StyleDictionary = require("style-dictionary");

const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

const designSystemFormatter = ({ dictionary, platform, options, file }) => {
  // return JSON.stringify(x);
  // Recursively replace all nested objects with "value" key with the value of the "value" key.
  function replaceNestedObjects(obj) {
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
  }

  replaceNestedObjects(dictionary.properties);

  // Output the dictionary as a file.
  return (
    fileHeader({ file }) +
    // Split object into multiple objects based on the key.
    // E.g. { spacing: {...}, color: {...} } => const spacing: {...}; const color: {...};
    Object.keys(dictionary.tokens)
      .map((key) => {
        return `const ${camelCase(key)} = ${JSON.stringify(
          dictionary.tokens[key],
          null,
          2
        )}`;
      })
      .join("\n\n") +
    "\n\n" +
    "export {\n" +
    Object.keys(dictionary.tokens)
      .map((k) => `  ${camelCase(k)}`)
      .join(", \n") +
    "\n};\n"
  );
};

// Suppress nested collision output.
designSystemFormatter.nested = true;

// Convert shadow to css format.
StyleDictionary.registerTransform({
  name: "shadow/design-system",
  type: "value",
  matcher: function (prop) {
    return prop.type === "boxShadow";
  },
  transformer: function (prop) {
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

StyleDictionary.registerFormat({
  name: "typescript/design-system",
  formatter: designSystemFormatter,
});

module.exports = {
  source: ["tokens/transformed.json"],
  platforms: {
    javascript: {
      transforms: ["shadow/design-system"],
      buildPath: "themes/",
      files: [
        {
          destination: "default.ts",
          format: "typescript/design-system",
        },
      ],
    },
  },
};
