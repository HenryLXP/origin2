//裁判  对象

var judge = {
	//属性
	ele : null,
	attacker : null, //攻击者
	times : 0, //第几轮
	
	//方法
	//初始化方法
	init : function(){
		this.ele = document.getElementById("list");
		return this;
	},
	
	//开始游戏
	start : function(){
		this.times = 0;
		this.ele.innerHTML = "";
		clearInterval(this.timer);
		
		//开启定时器，开始PK
		this.timer = setInterval(function(){
			
			judge.times++;
			
			var obj = judge.attacker.attack();  //攻击者开始攻击
			
			var liNode = document.createElement("li");
			liNode.innerHTML = "第"+judge.times+"轮【"+judge.attacker.name+"】"+ obj.skill + obj.hurtHp + "点血量";
			judge.ele.appendChild(liNode);
			
			if(judge.attacker.enemy.hp <=0){
				
				clearInterval(judge.timer);
				
				var liLastNode = document.createElement("li");
				liLastNode.innerHTML = "恭喜【"+judge.attacker.name+"】取得了最后的胜利!";
				liLastNode.style.color = "red";
				judge.ele.appendChild(liLastNode);
			}
			
			//交换攻击者
			judge.attacker = judge.attacker.enemy;
 
			
		},1000);
		
	}
	
	
	
	
	
	
}
