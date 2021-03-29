const { verify, getToken } = require('../token');
const mongoose = require('mongoose');

const Log = mongoose.model('Log');
const LogResponse = mongoose.model('LogResponse');

const logMiddleware = async (ctx, next) => {
  const startTime = Date.now();

  await next();

  let payload = {};
  try {
    payload = await verify(getToken(ctx));
  } catch (e) {
    payload = {
      account: '未知用户',
      id: '',
    };
  }

  const url = ctx.url;
  const method = ctx.method;
  const status = ctx.status;
  let show = true;

  if (url === '/log/delete') {
    show = false;
  }

  let responseBody = '';

  if (typeof ctx.body === 'string') {
    responseBody = ctx.body;
  } else {
    try {
      responseBody = JSON.stringify(ctx.body);
    } catch {
      responseBody = '';
    }
  }

  const endTime = Date.now();

  const log = new Log({
    user: {
      account: payload.account,
      id: payload.id,
    },
    request: {
      url,
      method,
      status,
    },

    endTime,
    startTime,
    show,
  });

  log.save();

  const logRes = new LogResponse({
    logId: log._id,
    data: responseBody,
  });

  logRes.save();
};

module.exports = {
  logMiddleware,
};
