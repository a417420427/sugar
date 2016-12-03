
var articleList = $('.article-list');
var postList=$('.post-list');
var sideArticle = $('.side-nav .article');
var sidePost = $('.side-nav .share');
articleList.load('find-article.html');


$(function(){
	sideArticle.click(function(){
		sideArticle.addClass('active');
		sidePost.removeClass('active');
		postList.html('');
		articleList.load('find-article.html');
	})
	sidePost.click(function(){
		sidePost.addClass('active');
		sideArticle.removeClass('active');
		articleList.html('');
		postList.load('find-post.html');
	})
})

