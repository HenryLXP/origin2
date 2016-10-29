//萤火虫类
//构造函数 Fireworm



//萤火虫类
function Fireworm(){
	
	this.ele = document.createElement("img");  //创建萤火虫
	this.ele.src = "images/1.jpg"           //图片地址
	
	this.ele.style.left = this.randomPoint().left + "px";  //出现的位置
	this.ele.style.top = this.randomPoint().top + "px";
	
	this.ele.style.opacity = 0.5;   //透明度
	this.ele.style.filter = "alpha(opacity=50)";
	
	
	document.body.appendChild(this.ele);
	
	//飞的方法
	this.fly();
		
}

//通过原型的方式 创建飞 方法
Fireworm.prototype.fly = function(){
	var self = this;  //保存this
	startMove(this.ele,this.randomPoint(),function(){
		self.fly();
	});
}
			

//通过原型的方式 产生随机点的方法
Fireworm.prototype.randomPoint = function(){
	var x = parseInt(Math.random()*document.documentElement.clientWidth);
	var y = parseInt(Math.random()*document.documentElement.clientHeight);
	return {left:x,top:y};
}
