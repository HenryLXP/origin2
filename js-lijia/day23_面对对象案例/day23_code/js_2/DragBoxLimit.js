

function DragBoxLimit(id){
	if(id == undefined){
		return;
	}
	
	//通过借用构造函数的继承属性
	
	DragBox.call(this,id);
	
}

//通过原型链来继承方法
DragBoxLimit.prototype = new DragBox();

//改写DragBox类里的move方法

DragBoxLimit.prototype.moveing = function(x,y){
	
	
	var left = x - this.divX;
	var top = y - this.divY;
	
	if(left < 0){
		left = 0;
	}
	if(top < 0){
		top = 0;
	}
	
	this.ele.style.left = left + "px";
	this.ele.style.top = top + "px";
	
}
