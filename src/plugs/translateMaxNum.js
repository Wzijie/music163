// 数字超过指定值时转换
// num 数字; maxNum 最大值; company 单位;
// 例: (15000, 10000, '万') ==> 15000 => 1.5万
function translateMaxNum(num, maxNum, company) {
  return num > maxNum ? `${(num / maxNum).toFixed(1)}${company}` : num;
}

export default translateMaxNum;
