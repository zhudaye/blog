const Router = require('koa-router');
const nunjucks = require('../nunjucks');
const render = require('./render');
let router = new Router();
let url = 'http://localhost:3000';

router.get('', (ctx) => {
  ctx.body = nunjucks.render('index.html', {
    url: url
  })
})

router.get('admin', (ctx) => {
  ctx.body = nunjucks.render('admin.html', {
    url: url
  })
})

router.get('timeline', ctx => {
  ctx.body = nunjucks.render('timeline.html', {
    url: url
  })
})

router.get('articles/:type/:id', async ctx => {
  let rendered = await render(ctx, {
    content: '人生苦短，我选择vue~'
  });
  ctx.body = rendered;
})

router.get('*', ctx => {
  ctx.body = nunjucks.render('404.html', {
    url: url
  })
})

module.exports = router
