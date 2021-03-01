const getYearByTimeStamp = (ts)=>{
  const data = new Date(ts);
  return data.getFullYear();
};

const getDataByTimeStamp = (ts)=>{
  const data = new Date(ts);
  return data.getDate();
};

console.log(123);

module.exports = {
  getYearByTimeStamp,
  getDataByTimeStamp,
};
