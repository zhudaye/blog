const marked = require('marked');
const fs = require('fs');
const nunjucks = require('../nunjucks');
const path = require('path');
module.exports = async function (ctx, option) {
  let conent = await new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/../public/articles/${ctx.params.type}/${ctx.params.id}`, function(err, data) {
      if (err) {
        reject(false)
      } else {
        resolve(data)
      }
    })
  }).catch(e => console.log(e))

  if (conent) {
   return nunjucks.render('wiki.html', Object.assign({
      title: 'zhudaye',
      content: '人生苦短，我选择biubiubiu~',
      wiki: marked(conent.toString())
      }, option)
    )
  } else {
    return nunjucks.render('404.html')
  } 

}