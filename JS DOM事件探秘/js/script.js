window.onload = function(){
	var go=document.getElementById("go");
	var box=document.getElementById("box");

	eventUtil.addHandler(box,'click',function(){
		alert("woshizhenggefuhezi");
	});
	eventUtil.addHandler(go,'click',function(){
		e=event||window.event;
		//e=eventUtil.getEvent(e);
		alert(eventUtil.getElement(e));
		eventUtil.preventDefault(e);
		eventUtil.stopPropagation(e);
	});
}

/*function showMes(event){
		alert(event.target.nodeName);
		event.stopPropagation();
	}
	function showBox(){
		alert("zheshi fang anniu de hezi");
	}
	function goto(event){
		event.stopPropagation();
		event.preventDefault();		
	}
	
	//DOM0级事件处理程序
	var btn2 = document.getElementById("btn2");
	btn2.onclick = function(){
		alert("zhe li shi btn2");
	}
	//btn2.onclick = null;
	var btn3 = document.getElementById("btn3");
	var box = document.getElementById("box");
	var go = document.getElementById("go");

	//DOM2级事件处理程序
	btn3.addEventListener('click',showMes,false);
	btn3.addEventListener('click',function(){
		alert(this.value);
	},false);
	//btn3.removeEventListener('click',showMes,false);
	
	//IE事件处理程序
	var btn4 = document.getElementById("btn4");
	btn4.attachEvent('onclick',showMes);
	btn4.detachEvent('onclick',showMes);
	
	
	eventUtil.addHandler(btn3,'click',showMes);
	eventUtil.addHandler(box,'click',showBox);
	eventUtil.addHandler(go,'click',goto);*/
