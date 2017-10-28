function getStyle(obj,attr){
	if (obj.currentStyle){
		return obj.currentStyle[attr];
	}else {
		return getComputedStyle(obj,false)[attr];
	}
}

/*startMove(obj,{attr1:iTarget1,attr2:iTarget2},fn){}*/
function startMove(obj,json,fn){
	var flag=true;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		for(var attr in json){
			//1、取当前值
			var icur = 0;
			if( attr == 'opacity'){
				icur = Math.round(parseFloat(getStyle(obj,attr))*100);
			}else {
				icur = parseInt(getStyle(obj,attr));
			}
			//2、算速度
			var speed = (json[attr]-icur)/8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			//3、检测停止
			//不是所有的运动都到达了目标值
			if(icur != json[attr]){
				flag = false;
			}else{
				flag = true;
			}
			if(attr=='opacity'){
				obj.style.filter = 'alpha(opacity:'+(icur+speed)+')';//针对IE
				obj.style.opacity = (icur+speed)/100;//针对火狐和chrome
			}else{
				obj.style[attr] = icur+speed+'px';
			}
		}
		if(flag == true){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},30);
}

/*以下是lianshi那一节的js*/
//fn 回调函数，调用一下执行新的程序，
//判断一下第一次运动停止之后如果有最后一个参数，就执行这个函数；
//如果没有的话就直接结束
/*function startMove(obj,attr,iTarget,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		//1、取当前值
		var icur = 0;
		if( attr == 'opacity'){
			icur = Math.round(parseFloat(getStyle(obj,attr))*100);
		}else {
			icur = parseInt(getStyle(obj,attr));
		}
		//2、算速度
		var speed = (iTarget-icur)/8;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		//3、检测停止
		if(icur == iTarget){
			clearInterval(obj.timer);
			if(fn()){
				fn();
			}else{

			}
		}else{
			if(attr=='opacity'){
				obj.style.filter = 'alpha(opacity:'+(icur+speed)+')';//针对IE
				obj.style.opacity = (icur+speed)/100;//针对火狐和chrome
			}else{
				obj.style[attr] = icur+speed+'px';
			}
		}
	},30);
}*/

