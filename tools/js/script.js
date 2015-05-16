$(function(){
	//console.log('hello');
	$('#done').click(function(){
		var rawHTML = $('#input').val();
		//console.log($(rawHTML).find('#done').html());
		//var rawHTML = $(rawHTML).find('.addtoshortlist').remove();
		//var rawHTML = $(rawHTML).find('.pro_titlebar').remove();
		//var rawHTML = $(rawHTML).find('.tagholder').remove().html();
		//var itemLists = $(rawHTML).find('li');

		var itemArray = [];

		$(rawHTML).find('li.item').each(function (index) {
			itemArray[index] = {};
			itemArray[index].url = 'http://zovi.com/' + $(this).find('a').attr('href');
			itemArray[index].imageUrls = [];
			itemArray[index].imageUrls[0] = {};
			itemArray[index].imageUrls[0].url = $(this).find('figure img').attr('src');
			itemArray[index].title = $(this).find('a').attr('href') + '';
			itemArray[index].title = itemArray[index].title.split('--')[0].trim();
			itemArray[index].description = $(this).find('.item_price').html();
		})

		$('#output').val(JSON.stringify(itemArray));
	});

	$('#clear').click(function () {
		$('textarea').html('');
	})
})