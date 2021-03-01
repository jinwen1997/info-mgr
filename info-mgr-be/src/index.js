const koa = require('koa');

const app = new koa();
app.use((context)=>{
  const {request:req} = context;
  const {url} = req;
  if (url === '/'){
    context.body = '<h1>我是主页</h1>';
    return;
  };
  if (url === '/dsb、list'){
    context.body = '<h1>哈哈哈哈哈哈</h1>';
    return;
  };
  context.body = '404';
});
app.listen(3000,()=>{
  console.log('启动成功')
});

console.log(112233);
console.log(11111111111111111111111111);