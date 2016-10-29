//雪花类
//构造函数 Snow
function Snow(){
	//通过借用函数的方式继承父类的属性
	Base.call(this,"images/snow.gif");
	
	this.ele.style.left = this.randomPoint().left + "px";  //出现的位置
	this.ele.style.top = 0;	
	
	//document.body.appendChild(this.ele);
	
	//雪花下降
	this.down();
	
}
//通过原型链的方式继承父类的方法
Snow.prototype = new Base();
//雪花下降
Snow.prototype.down = function(){
	
	//保存this
	var self = this;
	
	//匀速运动
	var timer = setInterval(function(){
		//当前值
		var current = self.ele.offsetTop;
		//速度
		var iSpeed = 4;
		//目标值
		var top = current + iSpeed;
		//判断雪花是否落到页面底部
		if(top > document.documentElement.clientHeight - 100){
			
			top = 0;
		}
		
		//运动
		self.ele.style.top = top + "px";
	
		
	},30);
	
}
