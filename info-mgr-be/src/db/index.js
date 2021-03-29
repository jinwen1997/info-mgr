require('./Schemas/User');
require('./Schemas/InviteCode');
require('./Schemas/Good');
require('./Schemas/InventoryLog');
require('./Schemas/Character');
require('./Schemas/Log');
require('./Schemas/LogResponse');
require('./Schemas/ForgetPassword');
require('./Schemas/GoodClassify');

const mongoose = require('mongoose');

const connect = () => {
  return new Promise((resolve) => {
    // 去连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/info-mgr');

    // 当数据库被打开的时候 做一些事情
    mongoose.connection.on('open', () => {
      console.log('连接数据库成功');

      resolve();
    });
  });
};

module.exports = {
  connect,
};
