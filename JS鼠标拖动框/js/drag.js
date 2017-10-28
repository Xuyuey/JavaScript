window.onload = drag;

function drag(){
	var otitle = document.getElementById('drag-title');
	//按下鼠标移动
	otitle.onmousedown = fnDown;

	//
}

function fnDown(event){
	event = event||window.event;
    var oPanel = document.getElementById('drag'),
    disX = event.clientX - oPanel.offsetLeft;
    disY = event.clientY - oPanel.offsetTop;
	
	//移动鼠标
	document.onmousemove =function(event){
		event = event||window.event;
		fnMove(event,disX,disY);
	}

	//释放鼠标
	document.onmouseup = function(){
		document.onmousemove = null;
		document.onmouseup = null;
	}
}

function fnMove(event,posX,posY){
	var oPanel = document.getElementById('drag');
	var l = event.clientX-posX;
	var t = event.clientY-posY;
	var winW = document.documentElement.clientWidth ||document.body.clientWidth;
	var winH = document.documentElement.clientHeight ||document.body.clientHeight;
	var maxWidth = winW - oPanel.offsetWidth;
	var maxHeight = winH - oPanel.offsetHeight;
	
	if (l<0)
		l=0;
	else if(l>maxWidth)
		l=maxWidth;
	if (t<=0)
		t=0;
    else if(t>maxHeight)
		t=maxHeight;
	oPanel.style.left = l+'px';
	oPanel.style.top = t+'px';
}