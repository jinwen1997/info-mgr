const mongoose = require('mongoose');

//1.给哪个数据库的
//2.哪个集合
//添加文档

//schema 映射了MongoDB下的一个集合，并且他的内容就是集合下的稳当的构成
//Modal 这个东西可以理解为根据schema生成的一套方法集合，这套方法用来操作集合下的文档

const userSchema = new mongoose.Schema({
  nickname:String,
  password:String,
  age:Number
});

const usermodel = mongoose.model('user',userSchema)
const connect = ()=>{
  //连接数据库
  mongoose.connect('mongodb://127.0.0.1:27017/info-mgr');
  //当数据库被打开时，做一些事
  mongoose.connection.on('open',()=>{
    console.log('连接成功！');

    const user = new usermodel({
      nickname:'wangqianqianzi',
      password:'daselang123',
      age:18
    });
    user.age = 88;
    user.save();
  });
};

connect();