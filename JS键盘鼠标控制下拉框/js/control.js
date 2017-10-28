// 点击三角时 
window.onload=function(){
  var index = -1;
  var ul = document.getElementsByTagName('ul')[0];
  var list = document.getElementsByTagName('li');
  var cite = document.getElementsByTagName('cite')[0];

  cite.onclick = function(e){
    ul.style.display = 'block';
    if (index >= 0){
      list[index].style.background = "#ccc";
    }
    e = e||window.event;
    if (e.stopProgation){
      e.stopProgation();
    }else{
      e.cancelBubble=true;
    }
  }

  // 点击页面空白处时
  document.onclick = function(){
    ul.style.display = 'none';
  }

  // 滑过滑过、离开、点击每个选项时
  for (var i=0 ; i<list.length; i++){
    list[i].onmouseover = function(){
      this.style.backgroundColor = "#CCC";
    }
    list[i].onmouseout = function(){
      this.style.backgroundColor = "#fff";
    }
    list[i].onclick = function(){
      var aa = this.getElementsByTagName('a')[0];
      cite.innerHTML = aa.innerHTML;
      index = aa.getAttribute("selectid") -1;
    }
  }

  //键盘事件
  document.onkeyup = function(e){
    if (index>=0)
      var aa = list[index].getElementsByTagName('a')[0];
    e = e||window.event;
    //向下
    if(e.keyCode==40&&ul.style.display=='block'){
      if (index ==-1)
        index =0;
      else{
        list[index].style.backgroundColor = "#fff";
        if (index == list.length-1)
          index=0;
        else
          index++;
      }
      list[index].style.backgroundColor = "#CCC";
    }else if(e.keyCode==38&&ul.style.display=='block'){
      if (index ==-1)
        index =list.length-1;
      else{
        list[index].style.backgroundColor = "#fff"; 
        if (index == 0)
          index=list.length-1;
        else
          index--;  
      }
      list[index].style.backgroundColor = "#CCC";   
    }else if(e.keyCode==13){
      if (ul.style.display=='block'){
         if (index>-1){
          cite.innerHTML=aa.innerHTML;
        }
        ul.style.display = "none";
      }else{
        ul.style.display = "block";
      }
    }
  }  
}