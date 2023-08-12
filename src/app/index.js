const Koa = require('koa')
const userRouter = require('../router/user.router')
const bodyParser = require('koa-bodyparser')
const pool = require('./database')

const app = new Koa()

app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
pool.getConnection()

module.exports = app

