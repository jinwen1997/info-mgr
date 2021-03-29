// 每个文件都是一个模块
const Koa = require('koa');
const koaBody = require('koa-body');
const { connect } = require('./db');
const registerRoutes = require('./routers');
// const koaStatic = require('koa-static');
const { middleware: koaJwtMiddleware, checkUser, catchTokenError } = require('./helpers/token');
const { logMiddleware } = require('./helpers/log');
const cors = require('@koa/cors');
const path = require('path');
const config = require('./project.config');

const app = new Koa();

// app.use(koaStatic(path.resolve(__dirname, '../public')));

connect().then(() => {
  app.use(cors());
  app.use(koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 200 * 1024 * 1024,
    },
  }));

  app.use(catchTokenError);

  koaJwtMiddleware(app);

  app.use(checkUser);

  app.use(logMiddleware);

  registerRoutes(app);
  // 开启一个 http 服务
  // 接受 http 请求 并作处理，处理完后响应
  app.listen(config.SERVER_PORT, () => {
    console.log('启动成功');
  });
});
