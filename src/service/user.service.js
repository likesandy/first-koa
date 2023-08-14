const connection = require('../app/database')
class UserService {
  async create({ name, password }) {
    const statement = `INSERT INTO user (name, password) VALUES (?, ?);`

    const [result] = await connection.execute(statement, [name, password])
    return result[0]
  }

  async findUserByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`
    const [result] = await connection.execute(statement, [name])
    return result[0]
  }

  // 更新用户头像
  async updateAvatarUrlById(avatarUrl, userId) {
    try {
      const statement = `UPDATE user SET avatar_url = ? WHERE id = ?;`
      await connection.execute(statement, [avatarUrl, userId])
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new UserService()

