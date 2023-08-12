const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../config/secret')

class loginController {
  sign(ctx, next) {
    const { id, name } = ctx.user
    // 颁发token（2048位的私钥）
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256',
    })

    ctx.body = {
      message: '登录成功',
      data: {
        token,
        user: {
          id,
          name,
        },
      },
    }
  }

  test(ctx, next) {
    ctx.body = {
      message: 'test/list',
    }
  }
}

module.exports = new loginController()

