const Router = require('koa-router');
const nunjucks = require('../nunjucks');
const path = require('path');
const render = require('./render');
let router = new Router();

router.get('/', (ctx) => {
  ctx.body = nunjucks.render('index.html')
},
ctx => {
  console.log(ctx.body);
})

router.get('/articles/:type/:id', async ctx => {
  let rendered = await render(ctx, {
    content: '人生苦短，我选择vue~'
  });
  ctx.body = rendered;
})

router.get('*', ctx => {
  ctx.body = nunjucks.render('404.html')
})

module.exports = router
