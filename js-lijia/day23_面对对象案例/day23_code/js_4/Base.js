//父类
//属性 ：ele
//方法：randomPoint

function Base(imgSrc){
	
	if(imgSrc == undefined){
		return;
	}
	
	this.ele = document.createElement("img");
	this.ele.src = imgSrc;
	
	document.body.appendChild(this.ele);
	
}

//原型产生随机点方法
Base.prototype.randomPoint = function(){
	var x = parseInt(Math.random()*document.documentElement.clientWidth);
	var y = parseInt(Math.random()*document.documentElement.clientHeight);
	return {left:x,top:y};
}
