const connection = require('../app/database')
class FileService {
  async create(filename, mimetype, size, userId) {
    try {
      const statement =
        'INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?);'
      const [result] = await connection.execute(statement, [filename, mimetype, size, userId])
      return result
    } catch (error) {
      console.log(error)
    }
  }

  async getAvatarByUserId(userId) {
    try {
      const statement = `SELECT * FROM avatar WHERE user_id = ?;`
      const [result] = await connection.execute(statement, [userId])
      return result.pop()
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new FileService()

