const multer = require('@koa/multer')
const { UPLOAD_PATH } = require('../config/path')

const avatarUpload = multer({
  dest: UPLOAD_PATH,
})

const avatarHandler = avatarUpload.single('avatar')

module.exports = {
  avatarHandler,
}

