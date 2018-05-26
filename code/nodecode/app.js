const Koa = require('koa');
const http = require('http');
const path = require('path');
const staticResource = require('koa-static');
const router = require('./router/index.js');

const app = new Koa();
app.keys = ['zhudaye', 'zhuyeye'];

// 静态资源
app.use(staticResource(path.join(__dirname, 'static')));

// 挂载路由
app.use(router.routes())
  .use(router.allowedMethods());

http.createServer(app.callback()).listen(3000);
console.log(`server runing`)
