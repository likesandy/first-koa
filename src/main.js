const { port, host } = require('./config/server')
const app = require('./app')
require('./utils/handle-error')

app.listen(port, () => {
  console.log(`Server is running at ${host}:${port}`)
})

