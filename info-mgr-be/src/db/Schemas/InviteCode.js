const mongoose = require('mongoose');
const { getMeta, preSave } = require('../helpers');

const InviteCodeSchema = new mongoose.Schema({
  // 邀请码
  code: String,
  // 用来注册哪个账户
  user: String,

  meta: getMeta(),
});

InviteCodeSchema.pre('save', preSave);

mongoose.model('InviteCode', InviteCodeSchema);
