const fs = require('fs')
const path = require('path')

const tokens = JSON.parse(fs.readFileSync('./tokens/tokens.json', 'utf8'))
const folder = `./tokens-generated/raw`

// Write to file
Object.keys(tokens).forEach((key) => {
  const token = tokens[key]
  const filePath = path.join(folder, `${key}.json`)
  fs.mkdirSync(folder, { recursive: true })
  fs.writeFileSync(filePath, JSON.stringify(token, null, 2), 'utf8')
})
