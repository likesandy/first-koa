const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const userRouter = require('../router/user.router')
const loginRouter = require('../router/login.router')
const registerRouter = require('../router')

const app = new Koa()

app.use(bodyParser())
registerRouter(app)

module.exports = app

