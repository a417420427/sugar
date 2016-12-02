$('header.head').load('header.html',function(){
	$('#search-form>input').focus(function(){
		$(this).val('')
	}).blur(function(){
		$(this).val('搜索你想要的')
	})
});

