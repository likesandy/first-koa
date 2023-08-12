const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../config/secret')
const { UNAUTHORIZED } = require('../config/error')

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
    // 获取tokne
    const token = ctx.header.authorization?.replace('Bearer ', '')
    // 验证token
    try {
      const res = jwt.verify(token, PRIVATE_KEY, {
        algorithms: ['RS256'],
      })
      ctx.body = {
        message: '授权成功',
      }
    } catch (error) {
      return ctx.app.emit('error', UNAUTHORIZED, ctx)
    }
  }
}

module.exports = new loginController()

