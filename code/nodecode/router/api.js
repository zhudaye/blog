const { addArticle } = require('../controllers/articles/articles_fuc');
const Router = require('koa-router');
const formidable = require('formidable');
let api = new Router();
let form = new formidable.IncomingForm();

api.post('/articles/addArticle', async ctx => {
  let msg = await addArticle(ctx);
  ctx.body = { msg: msg }
})

api.post('/ceshi', async ctx => {
  let resContent = { hello: 'hello world' }
  ctx.body = resContent;
})

module.exports = api
