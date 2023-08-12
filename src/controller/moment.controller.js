const momentService = require('../service/moment.service')

class MomentController {
  async creat(ctx, next) {
    const { user_id, content } = ctx.request.body
    const res = await momentService.create({ user_id, content })
    ctx.body = {
      message: '创建动态成功',
    }
  }
  async queryList(ctx, next) {
    const { page, size } = ctx.query
    const res = await momentService.quertList(page, size)
    ctx.body = {
      message: '获取动态列表成功',
      data: res,
    }
  }
  // 获取动态详情
  async getMomentById(ctx, next) {
    const { momentId } = ctx.params
    const res = await momentService.getMomentById(momentId)
    ctx.body = {
      message: '获取动态详情成功',
      data: res,
    }
  }
}

module.exports = new MomentController()

