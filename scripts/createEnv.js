const fs = require('fs');

fs.writeFileSync('./.env', `WS_URL=${process.env.WS_URL}\n`)
fs.writeFileSync('./.env', `API=${process.env.API}\n`)