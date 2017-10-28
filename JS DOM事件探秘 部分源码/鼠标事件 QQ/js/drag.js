function getByClass(clsName,parent){
  //如果传进来了父元素即parent不为空，则希望他传进来的是父元素的id，
  //如果没有则认为是document
  var oParent=parent?document.getElementById(parent):document,
      eles=[],
      //获取父元素是oParent的所有子元素
      elements=oParent.getElementsByTagName('*');

  for( var i=0, l=elements.length; i<l; i++){
    if(elements[i].className==clsName)
      eles.push(elements[i]);
  }
  return eles;
}

window.onload=drag;
//三步：在标题区域按下，在页面中移动，释放鼠标时停止移动
function drag(){
  var oTitle=getByClass('login_logo_webqq','loginPanel')[0];
  //拖拽操作  鼠标按下，哪一边都可以
  oTitle.onmousedown=fnDown;
  //关闭操作
  var oClose=document.getElementById('ui_boxyClose');
  oClose.onclick=function(){
    document.getElementById('loginPanel').style.display='none';
  }
  //切换状态
  var loginState = document.getElementById('loginState');
  var loginStatePanel = document.getElementById('loginStatePanel');
  var list = loginStatePanel.getElementsByTagName('li');
  var picShow = document.getElementById('loginStateShow');
  var textShow = document.getElementById('login2qq_state_txt');
  var text = document.getElementById('stateSelect_text');

  loginState.onclick = function(e){  
    loginStatePanel.style.display = "block";
    if(e.stopPropagation){
        e.stopPropagation();
      }else{
        e.cancelBubble= true;
      }
  }

  //鼠标滑过、离开和点击状态列表时
  for(var i = 0; i<list.length; i++){
    list[i].onmouseover = function(){
      this.style.backgroundColor = "#567";
    }
    list[i].onmouseout = function(){
      this.style.backgroundColor = "#fff";
    }
    list[i].onclick = function(e){
      e=e||window.event;
      var id = this.id;
      textShow.innerHTML = this.getElementsByClassName('stateSelect_text')[0].innerHTML;
      picShow.className = "";
      picShow.className = "login-state-show "+id;
      loginStatePanel.style.display = "none";
      if(e.stopPropagation){
        e.stopPropagation();
      }else{
        e.cancelBubble= true;
      }
    }
  } 
  document.onclick = function(){
      loginStatePanel.style.display = "none";
  }
}

//实现第二步
function fnDown(event){
  event=event||window.event;
  var oDrag=document.getElementById('loginPanel');
    //光标按下时光标和面板之间的相对距离
    disX=event.clientX-oDrag.offsetLeft;
    disY=event.clientY-oDrag.offsetTop;
    console.log("event.clientX:"+event.clientX);
	console.log("event.clientY:"+event.clientY);
	console.log("oDrag.offsetLeft:"+oDrag.offsetLeft);
	console.log("oDrag.offsetTop:"+oDrag.offsetTop);
  //移动
  document.onmousemove=function(event){
    event=event||window.event;
    fnMove(event,disX,disY);
  }
  //释放 
  document.onmouseup=function(){
    //删除事件
    document.onmousemove=null;
    document.onmouseup=null;
  }
      
  //当鼠标在元素内部移动的时候，重复触发
  //event接收到的就是这个事件的对象，而clientX，clientY保存在event中
  //因为不管在面板的什么位置点击鼠标，鼠标的坐标会立刻赋值给面板的左上角，会有一个跳动很不美观
 /* document.onmousemove=function(event){
    event=event||window.event;
    //每一个能随着光标移动的对象都必须要有一个绝对定位
    //测试一下
    document.title=event.clientX+"  "+event.clientX;
    oDrag.style.left=event.clientX+"px";
    oDrag.style.top=event.clientY+"px";
  }*/
}

function fnMove(e,posX,posY){
  var oDrag=document.getElementById('loginPanel');
      l=e.clientX-posX,
      t=e.clientY-posY,
      winW=document.documentElement.clientWidth||document.body.clientWidth,
      winH=document.documentElement.clientHeight||document.body.clientHeigh,
      maxW=winW-oDrag.offsetWidth-10,
      maxH=winH-oDrag.offsetHeight;
  if(l<0){
    l=0;
  }else if(l>maxW){
    l=maxW;
  }
  if(t<0){
    t=10;
  }else if(t>maxH){
    t=maxH;
  }

  oDrag.style.left=l+'px';
  oDrag.style.top=t+'px';
}
