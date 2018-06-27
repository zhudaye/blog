const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');
const Articles = sequelize.define('article', { // 映射用户表
  article_title:{
    type: Sequelize.STRING(45),
    allowNull: false
  },
  article_type: {
    type: Sequelize.INTEGER, // 1：技术；2：记一件小事；3：小说
    allowNull: false
  },
  article_read: {
    type: Sequelize.INTEGER
  },
  article_like: {
    type: Sequelize.INTEGER,
  },
  article_url: {
    type: Sequelize.STRING(45)
  },
  article_des: {
    type: Sequelize.STRING(100)
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

/**
 * 添加新文章
 * 
 * @param { object } option
 * option {
 *   @param { string } article_title, and
 *   @param { number } article_type, and
 *   @param { string } article_url, and
 *   @param { string } article_des and
 * }
 * 
 * @returns
 * 
 */
const createArticle = function(option) {
  return new Promise((resolve, reject) => {
    let date = new Date().getTime()
    Articles.findOrCreate({
      where: option,
      defaults: {
        create_time: date
      }
    }).spread((article, created) => {
      resolve({
        data: article,
        isIn: created
      })
    })
  }).catch(e => {
    console.log(e);
  })
}

/**
 * 查找文章
 * 
 * @param { object } option
 * option {
 *   @param { object } where, or
 *   @param { number } offset, or
 *   @param { number } limit or
 * }
 * 
 * @returns
 * 
 */
const findArticle = function(option) {
  return new Promise((resolve, reject) => {
    Articles.findAndCountAll(option).then(result => {
      resolve(result)
    })
  }).catch(e => {
    console.log(e);
  })
}

/**
 * 更新文章
 * 
 * @param { object } option
 * option {
 *   @param { number } article_id, and
 *   @param { number } article_type, or
 *   @param { string } article_title, or
 *   @param { string } article_url, or
 *   @param { string } article_des or
 * }
 * 
 * @returns
 * 
 */
const updateUser = function(option) {
  return new Promise((resolve, reject) => {
    let date = new Date().getTime();
    Articles.update(option,
      { where: { article_id: option.article_id },
        defaults: { update_time: date }
      }
    ).then(() => {
      resolve(true)
    })
  }).catch(e => {
    console.log(e);
  })
}

/**
 * 删除文章
 * 
 * @param { object } option
 * option {
 *   @param { number } article_id, or
 *   @param { number } article_type, or
 *   @param { string } article_title, or
 *   @param { string } article_url, or
 * }
 * 
 * @returns
 * 
 */
const deleteArticle = function(option) {
  return new Promise((resolve, reject) => {
    Articles.findAll({
      where: option
    }).then(result => {
      if (!(result && result.length > 0)) {
        reject(false)
      }
      Articles.destroy({ where: option }).then(() => {
        resolve(result)
      })
    })
  }).catch(e => {
    console.log(e);
  })
}

module.exports = {
  findArticle,
  createArticle,
  deleteArticle,
  updateUser
}
