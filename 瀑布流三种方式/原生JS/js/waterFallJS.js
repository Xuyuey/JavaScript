function getClassName(obj, cls){
	var ele = obj.getElementsByTagName('*');
	var results = [];
	for(var i = 0; i<ele.length; i++){
		if(ele[i].className==cls){
			results.push(ele[i]);
		}
	}
	return results;
}
function getMinhIndex(arr,val){
	for(var i in arr){
		if (arr[i] == val)
			return i;
	}
}
function waterFull(par, box){
	//计算整个页面显示的列数（页面宽/盒子宽）
	var oPar = document.getElementById(par);
	var oBox = getClassName(oPar, box);
	var oBoxW = oBox[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth/oBoxW);

	//设置main的宽度
	oPar.style.cssText = 'width:'+oBoxW*cols+'px;margin: 0 auto;';
	//找到第一行元素中最矮的那个，把第二行的第一个元素放在他的下面
	//hArr 存放每一列高度的数组
	var hArr=[];
	for (var i=0; i<oBox.length ;i++){
		if (i<cols){
			hArr.push(oBox[i].offsetHeight);
		}else{
			var minH = Math.min.apply(null,hArr);
			var index = getMinhIndex(hArr,minH);
			oBox[i].style.position = 'absolute';
			oBox[i].style.top = minH+'px';
			oBox[i].style.left = oBoxW*index +'px';
			//oBox[i].style.left = oBox[index].offsetLeft +'px';
			hArr[index] += oBox[i].offsetHeight;
		}
	}
}
function checkScrollSlide(){
	var oParent = document.getElementById('main');
	var oBox = getClassName(oParent,'box');
	var lastBoxH = oBox[oBox.length-1].offsetTop+Math.floor(oBox[oBox.length-1].offsetHeight/2);
	console.log('lastBoxH'+lastBoxH)
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
	console.log('H'+(scrollTop+pageHeight))
	return (lastBoxH < scrollTop+pageHeight)?true:false;
}
window.onload = function(){
	var dataInt = {
		"data":[{"src":"1.jpg"},
				{"src":"2.jpg"},
				{"src":"3.jpg"},
				{"src":"4.jpg"},
				{"src":"5.jpg"},
				{"src":"6.jpg"},
				{"src":"7.gif"},
				{"src":"8.jpg"},
				{"src":"9.jpg"},
				{"src":"10.jpg"},
				{"src":"11.jpg"},
				{"src":"12.jpg"}
				]};
	waterFull('main', 'box');
	window.onscroll = function(){
		if(checkScrollSlide()){
			//将数据渲染进来
			var main = document.getElementById('main');
			for(var i =0 ;i<dataInt.data.length; i++){
				var oBox = document.createElement('div');
				oBox.className = "box";
				var oPic = document.createElement('div');
				oPic.className = "pic";
				var img = document.createElement('img');
				console.log(dataInt.data[i].src);
				img.src = 'images/'+dataInt.data[i].src;
				oPic.appendChild(img);
				oBox.appendChild(oPic);
				main.appendChild(oBox);
			}
			waterFull('main', 'box');
		}
	}
}