const fs = require('fs')

const tokens = JSON.parse(fs.readFileSync('./tokens/tokens.json', 'utf8'))

// Write to file
Object.keys(tokens).forEach((key) => {
  const token = tokens[key]
  const path = `./tokens/raw/${key}.json`
  fs.writeFileSync(path, JSON.stringify(token, null, 2), 'utf8')
})
