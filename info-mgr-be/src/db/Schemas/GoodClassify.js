const mongoose = require('mongoose');
const { getMeta, preSave } = require('../helpers');

const GoodClassifySchema = new mongoose.Schema({
  title: String,

  meta: getMeta(),
});

GoodClassifySchema.pre('save', preSave);

mongoose.model('GoodClassify', GoodClassifySchema);
