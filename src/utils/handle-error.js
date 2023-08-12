const app = require('../app')
const { USER_ALREADY_EXISTS, NAME_OR_PASSWORD_IS_REQUIRED } = require('../config/error')

app.on('error', (err, ctx) => {
  let code = 0
  let message = ''
  switch (err) {
    case USER_ALREADY_EXISTS:
      code = -1001
      message = '用户名已经被注册'
      break
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1002
      message = '用户名或密码不能为空'
    default:
      break
  }
  return (ctx.body = {
    code,
    message,
  })
})

