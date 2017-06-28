// 时间戳转换成 年-月-日
function translateTime (timeStamp) {
  var date = new Date(timeStamp);
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  return `${year}-${month + 1}-${day}`;
}

export default translateTime;
