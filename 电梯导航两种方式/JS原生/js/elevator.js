$(document).ready(function() {
	//监听滚动条事件
	$(window).scroll(function(event) {
		var top = $(document).scrollTop();
		var menu = $('#menu');
		var item = $('#container').find('.item');
		var currentId = ""; //当前所在楼层id
		item.each(function(){
			var _this = $(this);
			//遍历得到每一层楼的offsetTop，
			//它是一个固定的值，
			//咱们要把滚动条的值和它进行对比，
			//来确定电梯导航的位置
			var itemTop = _this.offset().top;
			if(top > itemTop-150){
				currentId = "#" + _this.attr('id');
			}else{
				return false;
			}	
		});
		
		//根据currentId，设置相应楼层的.current属性
		var currentLink = menu.find('.current');
		if(currentId && currentLink.attr('href') != currentId){
			currentLink.removeClass('current');
			menu.find('[href='+ currentId +']').addClass('current');
		}
	});

	$('#menu a').click(function(event) {
		$('#menu a').removeClass('current');
		$(this).addClass('current');
	});
});
