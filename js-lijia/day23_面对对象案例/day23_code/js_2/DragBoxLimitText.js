

function DragBoxLimitText(id){
	if(id == undefined){
		return;
	}
	
	DragBoxLimit.call(this,id);
	
}

//原型链继承方法

DragBoxLimitText.prototype = new DragBoxLimit();

//重写方法
DragBoxLimitText.prototype.moveing = function(x,y){
	
	
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
	
	this.ele.innerHTML = "left :" + this.ele.style.left + "top:" + this.ele.style.top;
	
}
