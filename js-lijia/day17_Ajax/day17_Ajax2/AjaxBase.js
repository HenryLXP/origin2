

function createXHR(){
	if(window.XMLHttpRequest){  //支持ie7+  ,ff,谷歌浏览器...
		return new XMLHttpRequest();	
	}
	return new ActiveXObject("Microsoft.XMLHTTP"); //支持ie6
	
	
}
