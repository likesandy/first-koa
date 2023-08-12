const app = require('../app')
const {
  USER_ALREADY_EXISTS,
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_DOES_NOT_EXISTS,
  PASSWORD_IS_INCORRECT,
  UNAUTHORIZED,
} = require('../config/error')

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
      break
    case USER_DOES_NOT_EXISTS:
      code = -1003
      message = '用户不存在'
      break
    case PASSWORD_IS_INCORRECT:
      code = -1004
      message = '密码不正确'
      break
    case UNAUTHORIZED:
      code = -1005
      message = '未授权'
      break
    default:
      break
  }
  return (ctx.body = {
    code,
    message,
  })
})

