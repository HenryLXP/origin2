//雪花类
//构造函数 Snow
function Snow(){
	this.ele = document.createElement("img");  //创建雪花
	this.ele.src = "images/snow.gif"           //图片地址
	
	this.ele.style.left = this.randomPoint().left + "px";  //出现的位置
	this.ele.style.top = 0;	
	
	document.body.appendChild(this.ele);
	
	//雪花下降
	this.down();
	
}

//随机数
Snow.prototype.randomPoint = function(){
	var x = parseInt(Math.random()*document.documentElement.clientWidth);
	var y = parseInt(Math.random()*document.documentElement.clientHeight);
	return {left:x,top:y};
}

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
