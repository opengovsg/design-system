const { camelCase } = require("lodash");

const StyleDictionary = require("style-dictionary").extend("config.json");

StyleDictionary.registerFormat({
  name: "emotion",
  formatter: function ({ dictionary, platform, options, file }) {
    let toRet = "";
    Object.keys(dictionary.properties).forEach(function (key) {
      const varName = camelCase(key);
      toRet += `\nexport const ${varName} = {`;
      Object.keys(dictionary.properties[key]).forEach(function (tokenKey) {
        const token = dictionary.properties[key][tokenKey];
        toRet += `\n  ${token.name}: ${JSON.stringify(token.value)},`;
      });
      toRet += `\n}`;
    });

    return toRet;
  },
});

StyleDictionary.buildAllPlatforms();
