var data=['Phone5','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物券'],
    timer=null,//定时器 全局变量
    flag=0;
window.onload=function(){
  var play=document.getElementById("play"),
      stop=document.getElementById("stop");

  //开始抽奖
  play.onclick=playFun;
  stop.onclick=stopFun;

  //键盘事件
  document.onkeyup=function(event){
    event=event||window.event;
    console.log(event.keyCode);
    if(event.keyCode==13){
      if(flag==0){
        playFun();
        flag=1;
      }else{
        stopFun();
        flag=0;
      }
    }
  }
}

//加定时器，每隔一段时间取数组里面的随机值
function playFun(){
  var title=document.getElementById("title");
  var play=document.getElementById("play");
  clearInterval(timer);//点击开始之后先把原来的定时器清楚，否则点的越快抽的越快
  timer=setInterval(function(){
    //取出来是一个0-1之间的浮点数，所以我们需要先取整，还要设定一个范围
    var random=Math.floor(Math.random()*data.length) ;
    title.innerHTML=data[random];
  },50);
  play.style.background="#999";//this：你在哪点的this就是谁
}

function stopFun(){
  clearInterval(timer);
  var play=document.getElementById("play");
  play.style.background="#036";
}