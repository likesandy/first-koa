const { USER_ALREADY_EXISTS, NAME_OR_PASSWORD_IS_REQUIRED } = require('../config/error')
const userService = require('../service/user.service')
const { md5password } = require('../utils/md5-password')

const verifyUser = async (ctx, next) => {
  const { name, password } = ctx.request.body
  // 判断用户名和密码不能为空
  if (!name && !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }

  // 判断用户名是否已经被注册
  const user = await userService.findUserByName(name)
  if (user) {
    return ctx.app.emit('error', USER_ALREADY_EXISTS, ctx)
  }
  await next()
}

const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body
  ctx.request.body.password = md5password(password)

  await next()
}

module.exports = {
  verifyUser,
  handlePassword,
}

