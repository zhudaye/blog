const Koa = require('koa');
const http = require('http');
const path = require('path');
const staticResource = require('koa-static');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const router = require('./router/index.js');
const api = require('./router/api.js');
const cors = require('koa2-cors');

const app = new Koa();

// 允许跨域访问
app.use(cors({
  origin: '*'
}));

// 处理post请求数据
app.use(bodyParser());
app.keys = ['zhudaye', 'zhuyeye'];

// 静态资源
app.use(staticResource(path.join(__dirname, 'static')));

// 挂载路由
let forums = new Router();
forums.use('/api', api.routes(), api.allowedMethods());
forums.use('/', router.routes(), router.allowedMethods());
app.use(forums.routes())

http.createServer(app.callback()).listen(3000);
console.log(`server runing at 3000`)
