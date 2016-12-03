$('header.head').load('header.html',function(){
	$('#search-form>input').focus(function(){
		$(this).val('')
	}).blur(function(){
		$(this).val('搜索你想要的')
	})
});
$('footer.foot').load('footer.html');

/*function tapNav(){
	var head = $('header.head');
	
	head.on('click','.main-nav li',function(){
		console.log(this)
		$(this).children('.under-line').addClass('current').siblings('li').children('.under-line').removeClass('current')
	})
}
*/
$(function(){
	var linkFold = $('.links-fold');
	var linkList = $('.links-list')
	linkFold.click(function(){
		linkList.addClass('active');
		$(this).hide();
	})
	
})

//window.onload 加载多个函数
function addLoad (func){
	var old = window.onload ;
	if(typeof window.onload!='function'){
		window.onload = func ;
	}else{
		window.onload = function(){
			old();
			func();
		}
	}
}

