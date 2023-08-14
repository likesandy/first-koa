const { UPLOAD_PATH } = require('../config/path')
const fileService = require('../service/file.service')
const fs = require('fs')
const userService = require('../service/user.service')
const { host, port } = require('../config/server')

class AvatarController {
  async upload(ctx, next) {
    const { filename, mimetype, size } = ctx.request.file
    const { id } = ctx.user

    await fileService.create(filename, mimetype, size, id)
    // 获取图片的url地址
    await userService.updateAvatarUrlById(filename, id)
    // 获取图片的url地址
    const data = `${host}:${port}/user/avatar/${id}`

    ctx.body = {
      message: `文件上传成功！可以查看~`,
      data,
    }
  }

  async previewImage(ctx, next) {
    const { userId } = ctx.params
    const { filename, mimetype } = await fileService.getAvatarByUserId(userId)
    ctx.response.set('content-type', mimetype)
    ctx.body = fs.createReadStream(`${UPLOAD_PATH}/${filename}`)
  }
}

module.exports = new AvatarController()

