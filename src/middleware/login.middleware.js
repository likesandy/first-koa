const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  PASSWORD_IS_INCORRECT,
  USER_DOES_NOT_EXISTS,
} = require('../config/error')
const userService = require('../service/user.service')
const { md5password } = require('../utils/md5-password')

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body
  // 判断用户名或密码不能为空
  if (!name || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }
  // 验证用户是否存在
  const user = await userService.findUserByName(name)
  if (!user) {
    return ctx.app.emit('error', USER_DOES_NOT_EXISTS, ctx)
  }
  // 验证用户密码是否正确
  if (md5password(password) !== user.password) {
    return ctx.app.emit('error', PASSWORD_IS_INCORRECT, ctx)
  }
  // 存储user信息，在下一个中间件中使用
  ctx.user = user

  await next()
}

module.exports = {
  verifyLogin,
}

