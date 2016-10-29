//玩家 类(构造函数)
function Player(name,hp){
	//属性
	this.name = name;   //名字
	this.hp = hp;		//血量
	this.enemy = null;	//对手
	
	//方法：
	//攻击
	this.attack = function(){
		var hurtHp = parseInt(Math.random()*30)+1;  //攻击时让对手损失的血量
		var skill = this.skills[parseInt(Math.random()*7)];  //攻击时的技能
		this.enemy.hurt(hurtHp);      //让对手损失的hurtHp这么多的血量
		return {hurtHp:hurtHp,skill:skill};   //返回血量和技能供裁判使用
		
	}
	
	//被击
	//num 让对手损失的血量
	this.hurt = function(num){
		this.hp -= num;
	}
	
	
	
}

//技能
Player.prototype.skills = ["发起了猛烈的进攻，打的他满地找牙, 对方损失了",
						"使用了大招，对方的假发被打掉了！损失了",
						"使用了魅惑技能，对方被迷的神魂颠倒，瞬间掉了2W的粉丝，损失了",
						"查看了葵花宝典，逼格提升了51%，对方被吓破了胆，损失了",
						"炫耀了他的大块肌肉，对方损失了",
						"狠狠的鄙视了对方一下，造成了巨大伤害，对方损失",
						"使用了情侣花式虐狗秀恩爱，一下子打中了对方的小心脏，对方损失"
						];
