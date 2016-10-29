//构造函数DragBox
//ele 属性
//starMOve
//moveing
//stopMove

function DragBox(id){
	
	if(id == undefined){
		return;
	}
		//对象属性box
	this.ele = document.getElementById(id);
	var self = this;					 
	this.ele.onmousedown = function(evt){
		var oEvent = evt || event;
		//self = dragbox
	 
		self.startMove(oEvent.clientX,oEvent.clientY);
	}	
}

//开始拖拽startMove
DragBox.prototype.startMove = function(x,y){
	
	//console.log(x+","+y);
	this.divX = x - this.ele.offsetLeft;
	this.divY = y - this.ele.offsetTop;
	
	var self = this;	
	
	document.onmousemove = function(evt){
		
		var oEvent = evt || event;
		//console.log(oEvent.clientX+","+oEvent.clientY)
		self.moveing(oEvent.clientX,oEvent.clientY)
	}
	
	document.onmouseup = function(){
		self.stopMove();
	}
}
//moveing 正在移动
DragBox.prototype.moveing = function(x,y){
	
	this.ele.style.left = x - this.divX + "px";
	this.ele.style.top = y - this.divY + "px";
	
}
//stopMove 停止拖拽
DragBox.prototype.stopMove = function(){
	document.onmousemove = null;
	document.onmouseup = null;

}