const Koa = require('koa');
const http = require('http');
const router = require('./router/index.js');

const app = new Koa();
app.keys = ['zhudaye', 'zhuyeye'];

app.use(router.routes())
  .use(router.allowedMethods());

http.createServer(app.callback()).listen(3000);
console.log(`server runing`)
