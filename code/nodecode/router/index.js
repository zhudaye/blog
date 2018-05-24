const Router = require('koa-router');
const nunjucks = require('../nunjucks');
const marked = require('marked');
const fs = require('fs');
const path = require('path');
let router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'fuck you';
  next();
},
ctx => {
  console.log(ctx.body);
})

router.get('/articles/technologys/:id', async ctx => {
  let conent =  await new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/../public/articles/${ctx.params.id}.md`, function(err, data) {
      if (err) {
        reject(false)
      } else {
        resolve(data)
      }
    })
  })

  if (conent) {
    ctx.body = nunjucks.render('wiki.html', {
      title: 'zhudaye',
      content: 'Hello World',
      wiki: marked(conent.toString())
    })
  } else {
    ctx.body = '404'
  }
  
})

module.exports = router
