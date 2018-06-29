const { addArticle, findArticle } = require('../controllers/articles/articles_fuc');
const Router = require('koa-router');
let api = new Router();

api.post('/articles/addArticle', async ctx => {
  let msg = await addArticle(ctx);
  ctx.body = msg;
})

api.get('/articles/findArticle', async ctx => {
  let msg = await findArticle(ctx);
  ctx.body = msg
})

api.post('/ceshi', async ctx => {
  let resContent = { hello: 'hello world' }
  ctx.body = resContent;
})

module.exports = api
