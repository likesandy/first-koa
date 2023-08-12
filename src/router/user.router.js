const KoaRouter = require('koa-router')
const userController = require('../controller/user.controller')
const { verifyUser, handlePassword } = require('../middleware/user.middleware')

const userRouter = new KoaRouter({ prefix: '/user' })

userRouter.post('/', verifyUser, handlePassword, userController.create)

module.exports = userRouter

 