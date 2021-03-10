const getMate = ()=>{
  return {
    createdAt:{
      type:Number,
    default:(new Date()).getTime(),
    },
    updatedAt:{
      type:Number,
    default:(new Date()).getTime(),
    },
  }
};

module.exports = {
  getMate,

}