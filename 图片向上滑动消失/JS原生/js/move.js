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
			var speed = (json[attr]-icur)/5;
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
window.onload=function(){
	var div = document.getElementById('move');
	var aList = div.getElementsByTagName('a');
	for(var j = 0; j<aList.length; j++){
		aList[j].onmouseenter = function(){
			var ii = this.getElementsByTagName('i')[0];
			startMove(ii,{top:-45, opacity:0},function(){
				ii.style.top = 30+"px";
				startMove(ii,{top:0, opacity:100});
			});
		}
	}
}