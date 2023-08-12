const userService = require('../service/user.service')

class UserController {
  async create(ctx, next) {
    const { name, password } = ctx.request.body

    // 创建用户
    const result = await userService.create({ name, password })

    ctx.body = {
      message: '创建用户成功',
      result,
    }
  }
}

module.exports = new UserController()

