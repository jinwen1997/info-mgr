const xlsx = require('node-xlsx');

const loadExcel = (path) => {
  return xlsx.parse(path);
};

const getFirstSheet = (sheets) => {
  return sheets[0].data;
};

module.exports = {
  loadExcel,
  getFirstSheet,
};
