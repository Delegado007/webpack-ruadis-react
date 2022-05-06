const fs = require('fs');

fs.writeFileSync('./.env', `WS_URL=${process.env.WS_URL}\n`)