const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');
const User = sequelize.define('user_info', { // 映射用户表
  user_name:{
    type: Sequelize.STRING(11),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(12),
    allowNull: false
  },
  photo: {
    type: Sequelize.STRING(45)
  },
  user_id: {
    type: Sequelize.INTEGER(20).UNSIGNED,
    allowNull: false
  },
  user_sex: {
    type: Sequelize.INTEGER // 1：男；2：女
  },
  user_tel: {
    type: Sequelize.STRING(15)
  },
  user_email: {
    type: Sequelize.STRING(45)
  },
  user_qq: {
    type: Sequelize.STRING(45)
  },
  user_wechat: {
    type: Sequelize.STRING(45)
  },
  user_webo: {
    type: Sequelize.STRING(45)
  },
  create_time: {
    type: Sequelize.BIGINT(20),
    allowNull: false
  },
  update_time: {
    type: Sequelize.BIGINT(20)
  }
},
{
  timestamps: false
})

// 创建新用户
const createUser = function(option) {
  return new Promise((resolve, reject) => {
    const date = new Date().getTime()
    User.findOrCreate({
      where: option,
      defaults: {
        user_name: `User-${('' + date).substr(-5)}`,
        user_id: date,
        create_time: date
      }
    }).spread((user, created) => {
      resolve({
        data: user,
        isIn: created
      })
    })
  }).catch(e => {
    console.log(e);
    reject(false)
  })
}

// 查询用户
const findUser = function(option) {
  return new Promise((resolve, reject) => {
    User.findAll({
      where: option
    }).then(users => {
      resolve(users)
    })
  }).catch(e => {
    console.log(e);
    reject(false)
  })
}

//更新用户
const updateUser = function(option) {
  return new Promise((resolve, reject) => {
    User.update(option,{ where: { user_id: option.user_id } }).then(() => {
      resolve(true)
    })
  }).catch(e => {
    console.log(e);
    reject(false)
  })
}

//删除用户
const deleteUser = function(option) {
  return new Promise((resolve, reject) => {
    User.destroy({ where: option }).then(() => {
      resolve(true)
    })
  }).catch(e => {
    console.log(e);
    reject(false)
  })
}
module.exports = {
  findUser,
  createUser,
  updateUser,
  deleteUser
}