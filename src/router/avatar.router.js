const KoaRouter = require('koa-router')
const { verifyAuth } = require('../middleware/login.middleware')
const { upload } = require('../controller/avatar.controller')
const { avatarHandler } = require('../middleware/file.middleware')

const avatarRouter = new KoaRouter({ prefix: '/avatar' })

avatarRouter.post('/', verifyAuth, avatarHandler, upload)

module.exports = avatarRouter

