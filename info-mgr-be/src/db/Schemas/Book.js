// const mongoose = require('mongoose');
// const {getMate} = require('../helpers');
// const BookSchema = new mongoose.Schema({
//   //书名
//   name:String,
//   //价格
//   price:Number,
//   //作者
//   author:String,
//   //出版日期
//   publishDate:String,
//   //分类
//   classify:String,
//
//   //
//   //
//
//   meta:getMate(),
//
// });
//
// mongoose.model('Book',BookSchema);


const mongoose = require('mongoose');
const {getMate} = require('../helpers');
const BookSchema = new mongoose.Schema({
  name:String,
  price:Number,
  author:String,
  publishDate:String,
  classify:String,
  //库存
  count:Number,


  meta:getMate(),

});

mongoose.model('Book',BookSchema);