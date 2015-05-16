$(function(){
	//console.log('hello');
	$('#done').click(function(){
		var rawHTML = $('#input').val();
		//console.log($(rawHTML).find('#done').html());
		var rawHTML = $(rawHTML).find('.addtoshortlist').remove();
		var rawHTML = $(rawHTML).find('.pro_titlebar').remove();
		var rawHTML = $(rawHTML).find('.tagholder').remove().html();

		$('#output').val(rawHTML);
	});

})