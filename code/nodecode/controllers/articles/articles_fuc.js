const article = require('./atticles');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const form = new formidable.IncomingForm();

/**
 *读文件
 *
 *   @param { string } url, and
 * }
 * 
 * @returns
 */
const readFile = url => {
  return new Promise((resolve, reject) => {
    fs.readFile(url, (err, data) => {
      if (err) {
        reject({
          status: false,
          msg: '读文件' + err
        })
      }
      resolve({
        status: true,
        msg: data
      })
    })
  }).catch(e => {
    console.log(e)
    return e
  })
}

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
const writeFile = async option => {
  let file = await readFile(option.data.file.path);
  return new Promise((resolve, reject) => {
    !file.status && reject(file)

    fs.writeFile(option.fileName, file.msg, err => {
      if (err) {
        reject({
          status: false,
          msg: '写文件' + err
        })
      }
      resolve({
        status: true,
        msg: '文件写入成功'
      })
    })
  }).catch(e => {
    console.log(e)
    return e
  })
}

/**
 *类型映射
 *
 * @param { number } type
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
        reject({
          status: 301,
          msg: '数据解析失败，请上传formData数据'
        })
      }
      
      let url = `/${typeMap(+fields.type)}/${fields.fileName}`;

      let writeMd = await writeFile({
        fileName: `./public/articles${url}`,
        data: files
      })

      ;!writeMd.status && reject({
        status: 500,
        msg: writeMd.msg
      })
      
      // 文件写入成功后，记录到数据库
      let created = await article.createArticle ({
        user_id: +fields.userId,
        article_title: fields.title,
        article_type: +fields.type,
        article_url: url,
        article_des: fields.des
      })

      ;(created.status && created.isIn) && resolve({
        status: 300,
        msg: '文章已存在!'
      })

      ;!created.status && reject({
        status: 300,
        msg: '文章添加失败!'
      })

      resolve({
        status: 200,
        msg: '文章添加成功!'
      })
    });
  }).catch(e => {
    console.log(e)
    return e
  })
}

// 查找文章
const findArticle = async ctx => {
  let articles = await article.findArticle(ctx.query);
  return new Promise((resolve, reject) => {
    ;!articles.status && reject({
      status: 500,
      msg: articles.msg
    })

    resolve({
      status: 200,
      msg: '获取数据成功!',
      data: {
        list: articles.data.rows,
        count: articles.data.count,
        page: +ctx.query.page,
        pageSize: +ctx.query.pageSize
      }
    })
  }).catch(e => {
    console.log(e);
    return e
  })
}

module.exports = {
  addArticle,
  findArticle
}

