//获取元素的属性值
//obj  元素对象
//attr 要获取的元素属性

function getStyleAttr(obj,attr){
	if(window.getComputedStyle){  //ie9+  ff 谷歌
		return getComputedStyle(obj,null)[attr];			
	}
	//ie8及以下
	return obj.currentStyle[attr];

}

//封装运动函数
//obj 元素对象
//attr 元素属性
//iTraget 目标位置
//fn 回调函数
function startMove(obj,attr,iTarget,fn){
	
	//先关闭原来的定时器
	clearInterval(obj.timer);
	//开启一个新的定时器，开始运动
	obj.timer = setInterval(function(){
		
		//获取初始值
		var current = 0;
		
		if(attr == "opacity"){
			current= parseFloat(getStyleAttr(obj,attr)) * 100;
			current = Math.round(current);
		}else{
			current= parseFloat(getStyleAttr(obj,attr));
			current = Math.round(current);			
		}
		
		//给一个速度
		var iSpeed = (iTarget - current) / 8;
		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
		
		
 
		//判断是否到达临界值
		if(current == iTarget){
			clearInterval(obj.timer); //运动停止
			
			if(fn){
				fn();
			}
 
			return                    //跳出
		}
		
		//改变透明度
		if(attr == "opacity"){
			obj.style.opacity = (current + iSpeed) / 100 ;
			obj.style.filter = "alpha(opacity:"+ (current + iSpeed) +")";
		}else{
			obj.style[attr] = current + iSpeed + "px";
		}
 	
	},30)	
	
	
}
