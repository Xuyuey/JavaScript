function waterFall(){
	//计算有多少列 
	var oBox = $('#main>div');
	var w = oBox.eq(0).outerWidth();
	var cols = Math.floor($(window).width()/w);
	var mainW = w*cols;	
	//$('#main').css('width', (mainW+"px");
	$('#main').width(mainW).css('margin','0 auto');
	var hArr = [];
	oBox.each(function(index,value){
		var h = oBox.eq(index).outerHeight();
		if(index<cols){
			console.log('h'+h)
			hArr[index]=h;
			
		}else{
			var minH = Math.min.apply(null, hArr);
			var minHIndex = $.inArray(minH, hArr);
			$(value).css({
				'position': 'absolute',
				'top': minH+'px',
				'left': w*minHIndex+'px'
			});
			hArr[minHIndex] +=h;
		}
    });
}
function checkScrollSlide(){
	var lastTop = $('#main>div').last().offset().top;
	var lastHeight = Math.floor($('#main>div').last().outerHeight()/2);
	var lastTotal = lastTop+lastHeight;
	var clientHeight = $(window).height();
	var scrollTop = $(window).scrollTop();
	var scrollTotal = clientHeight+scrollTop;
	return (lastTotal<scrollTotal)?true:false;
}
$(window).on('load',function(){
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
	waterFall();
	$(window).scroll(function(){
		if(checkScrollSlide()){
			$.each(dataInt.data,function(index,value){
				var oBox = $('<div>').addClass('box').appendTo($('#main'));
				var oPic = $('<div>').addClass('pic').appendTo($(oBox));
				var oImg = $('<img>').attr('src',('images/'+$(value).attr('src'))).appendTo($(oPic));
			});
			waterFall();
		}
	});
});
