const KoaRouter = require('koa-router')
const { create } = require('../controller/user.controller')
const { verifyUser, handlePassword } = require('../middleware/user.middleware')
const { previewImage } = require('../controller/avatar.controller')

const userRouter = new KoaRouter({ prefix: '/user' })

userRouter.post('/', verifyUser, handlePassword, create)
userRouter.get('/avatar/:userId', previewImage)

module.exports = userRouter

