$('.product-list').load('pretty-item.html');

$(function(){
	var cateList = $('.cate-list');
	var box = $('.cate-detail-wrap .box');
	console.log(cateList,box)
	cateList.mouseenter(function(){
		var index = $(this).index();
		box.eq(index).show().siblings().hide();
	})
	box.mouseleave(function(){
		$(this).hide();
	})
})
