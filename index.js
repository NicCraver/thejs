// 获取当前时间年月日
module.exports.getNowDate = () => {
  // 格式为 2020-10-10
  let date = new Date();
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
};
