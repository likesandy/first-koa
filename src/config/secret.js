const path = require('path')
const fs = require('fs')

// 相对路径与项目启动的路径有关
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'))
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'))

module.exports = {
  PRIVATE_KEY,
  PUBLIC_KEY,
}

