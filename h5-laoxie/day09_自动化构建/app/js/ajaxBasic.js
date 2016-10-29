		function createXHR(){
			if(window.XMLHttpRequest){//支持ie7或者以上
				return new XMLHttpRequest;
			}
			return new ActiveXObject("Miscroft.XMLHTTP");//支持ie6
		}