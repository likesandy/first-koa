const KoaRouter = require('koa-router')
const { verifyAuth } = require('../middleware/login.middleware')
const { creat, queryList, getMomentById } = require('../controller/moment.controller')
const momentRouter = new KoaRouter({ prefix: '/moment' })

momentRouter.post('/', verifyAuth, creat)
momentRouter.get('/', queryList)
momentRouter.get('/:momentId', getMomentById)

module.exports = momentRouter

