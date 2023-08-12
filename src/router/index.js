const fs = require('fs')

function registerRouter(app) {
  const files = fs.readdirSync(__dirname)

  for (const file of files) {
    if (!file.endsWith('.router.js')) continue
    const route = require(`./${file}`)
    app.use(route.routes())
    app.use(route.allowedMethods())
  }
}

module.exports = registerRouter

