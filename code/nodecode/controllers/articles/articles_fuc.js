const { findArticle, createArticle, deleteArticle, updateUser } = require('./atticles');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const form = new formidable.IncomingForm();

/**
 *写文件
 *
 * @param { object } option
 * option {
 *   @param { string } filename, and
 *   @param { data } data, and
 * }
 * 
 * @returns
 */
const writeFile = option => {
  console.log(option)
  return new Promise((resolve, reject) => {
    fs.writeFile(option.fileName, option.data, err => {
      if (err) {
        console.log(err)
        reject(false)
      }
      resolve(true)
    })
  }).catch(e => {
    console.log(e)
  })
}

/**
 *类型映射
 *
 * @param { object } type
 * 
 * @returns
 */
const typeMap = (type) => {
  switch (+type) {
    case 1: 
    return 'technologys';
    case 2: 
    return 'diarys';
    case 3: 
    return 'novel';
  }
}

// 添加文章
const addArticle = async ctx => {
  return new Promise((resolve, reject) => {
    form.parse(ctx.req, async (err, fields, files) => {
      if (err) {
        reject(false)
      }
      
      let url = `/${typeMap(+fields.type)}/${fields.fileName}`;

      let writeMd = await writeFile({
        fileName: `./public/articles${url}`,
        data: files
      })
  
      if (writeMd) {
        let created = await createArticle ({
          article_title: fields.title,
          article_type: +fields.type,
          article_url: url,
          article_des: fields.des
        })

        if (created) {
          resolve(true)
        }
      }

      reject(false)
    });
  }).catch(e => {
    console.log(e);
  })
}

module.exports = {
  addArticle
}

