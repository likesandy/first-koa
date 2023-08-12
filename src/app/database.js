const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'koa-coderhub',
})

// 判断是否连接成功
pool.getConnection((err, connection) => {
  if (err) {
    console.log('连接失败', err)
    return
  }

  connection.connect((err) => {
    if (err) {
      console.log('和数据库交互失败', err)
    } else {
      console.log('和数据库交互成功')
      connection.connect()
    }
  })
})

const connection = pool.promise()

module.exports = connection

