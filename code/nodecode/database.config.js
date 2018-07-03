module.exports = {
  username: 'root',
  password: 'zs770880',
  database: 'blog',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
