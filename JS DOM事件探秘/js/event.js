//跨浏览器解决方案
	var eventUtil={
		//添加句柄  传名字的时候不要加on,在elseif里面加on
		addHandler:function(element,type,handler){
			if(element.addEventListener){
				element.addEventListener(type,handler,false);
			}else if(element.attachEvent){
				element.attachEvent('on'+type,handler);
			}else{
				element['on'+type]=handler;
			}
		},
		//删除句柄  传名字的时候不要加on,在elseif里面加on
		removeHandler:function(element,type,handler){
			if(element.removeEventListener){
				element.removeEventListener(type,handler,false);
			}else if(element.detachEvent){
				element.detachEvent('on'+type,handler);
			}else{
				element['on'+type]=null;
			}
		},
		getEvent:function(event){
			return event?event:window.event;
		},
		//获取事件类型
		getType:function(event){
			return event.type;
		},
		//获取事件来自哪个文件
		getElement:function(event){
			return event.target||event.srcElement;
		},
		//阻止事件默认行为
		preventDefault:function(event){
			if (event.preventDefault){
				event.preventDefault();
			}else{
				event.returnValue = false;
			}
		},
		//阻止事件冒泡
		stopPropagation:function(event){
			if (event.stopPropagation){//判断的时候不要加括号
				event.stopPropagation();
			}else{
				event.cancelBubble = true;
			}
		}
	}