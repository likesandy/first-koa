const connection = require('../app/database')

class MomentService {
  async create({ user_id, content }) {
    // 创建动态
    const stament = `INSERT INTO moment (content, user_id) VALUES (?, ?);`
    const [result] = await connection.execute(stament, [content, user_id])
    return result
  }
  async quertList(page = 1, size = 10) {
    const offset = (page - 1) * size
    // 获取moment列表，根据page和size进行分页，结果需要list再加上user信息
    const stament = `
    SELECT
      m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
      JSON_OBJECT('id', u.id, 'name', u.name) user
    FROM moment m
    LEFT JOIN user u ON m.user_id = u.id
    LIMIT ? OFFSET ?;
  `
    const [result] = await connection.execute(stament, [size.toString(), offset.toString()])
    return result
  }

  // 获取动态详情
  async getMomentById(momentId) {
    const stament = `
    SELECT
      m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
      JSON_OBJECT('id', u.id, 'name', u.name) user
    FROM moment m
    LEFT JOIN user u ON m.user_id = u.id
    WHERE m.id = ?;
  `
    const [result] = await connection.execute(stament, [momentId])
    return result[0]
  }
}

module.exports = new MomentService()

