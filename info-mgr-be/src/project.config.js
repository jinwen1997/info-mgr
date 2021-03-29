const path = require('path');

module.exports = {
  DEFAULT_PASSWORD: '123123',
  JWT_SECRET: 'good-mgr',
  UPLOAD_DIR: path.resolve(__dirname, '../upload'),

  SERVER_PORT: 3000,
};
