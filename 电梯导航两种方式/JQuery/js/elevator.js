function getClassName(obj,cls){
	var elements = obj.getElementsByTagName('*');
	var results = [];
	for(var i=0; i<elements.length; i++){
		if(elements[i].className == cls){
			results.push(elements[i]);
		}
	}
	return results;
}

function hasClass(obj, cls){
	var reg = new RegExp("(\\s|^)" + cls +"(\\s|$)");
	return obj.className.match(reg);
}

function removeClass(obj, cls){
	if (hasClass(obj, cls)){
		//remove
		var reg = new RegExp("(\\s|^)" + cls +"(\\s|$)");
		obj.className = obj.className.replace(reg, "");
	}else{
		return ;
	}
}

function addClass(obj, cls){
	if(!hasClass(obj, cls)){
		obj.className += " "+cls;
	}
}
window.onload = function(){
	window.onscroll = function(){
		var top = document.documentElement.scrollTop||document.body.scrollTop;
		var menus = document.getElementById('menu').getElementsByTagName('a');
		var container = document.getElementById('container');
		var items = getClassName(container, "item");
		var currentId = ""
		for(var i =0 ; i<items.length; i++){
			var _item = items[i];
			var _itemTop = _item.offsetTop;
			if(top > _itemTop-150){
				currentId = _item.id;
			}else{
				break;
			}
		}

		if(currentId){
			//给正确的按钮赋值
			for(var j= 0; j<menus.length; j++){
				var _menu = menus[j];
				var _href = _menu.href.split("#");
				if(_href[_href.length-1] !=currentId){
					removeClass(_menu, "current");
				}else{
					addClass(_menu, "current");
				}
			}
		}
	}
}