const koa = require('koa');
const koaBody = require('koa-body');
const { connect } = require('./db');
const registerRouter = require('./routers');
const cors = require('@koa/cors');

const app = new koa();

connect().then(()=>{
  app.use(cors());
  app.use(koaBody());

  registerRouter(app);


  app.listen(3000,()=>{
    console.log('启动成功')
  });
});

