
// 根据屏幕宽度改变根节点的fontsize值
function setRootFontsize(){
	var deviceWidth = document.documentElement.clientWidth;
	console.log(deviceWidth);
	document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
}

export default setRootFontsize;



