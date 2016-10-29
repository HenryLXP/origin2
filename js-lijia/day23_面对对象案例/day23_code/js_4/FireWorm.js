//萤火虫类
//构造函数 Fireworm
//属性：ele
//方法：fly,randomPoint


//萤火虫类
function Fireworm(){
	//通过借用构造函数的方式继承属性
	Base.call(this,"images/1.jpg");
	
	this.ele.style.left = this.randomPoint().left + "px";  //出现的位置
	this.ele.style.top = this.randomPoint().top + "px";
	
	this.ele.style.opacity = 0.5;   //透明度
	this.ele.style.filter = "alpha(opacity=50)";
	
	
	//document.body.appendChild(this.ele);
	
	//飞的方法
	this.fly();
		
}
//通过原型的方式继承父类的方法
Fireworm.prototype = new Base();

//通过原型的方式 创建飞 方法
Fireworm.prototype.fly = function(){
	var self = this;  //保存this
	startMove(this.ele,this.randomPoint(),function(){
		self.fly();
	});
}
			

