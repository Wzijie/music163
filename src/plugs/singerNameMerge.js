// singerArr: ['作者a','作者b','作者c']
// 转换成： '作者a/作者b/作者c
function singerNameMerge (singerArr) {
  var singerStr = '';
  if (singerArr.length === 1) {
    return singerArr[0].name; 
  } else {
    singerArr.forEach((singer, index) => {
      if (singerArr.length !== index + 1) {
        singerStr = singerStr + singer.name + ' / ';
      } else {
        singerStr = singerStr + singer.name
      }
    });
    return singerStr; 
  } 
}

export default singerNameMerge
