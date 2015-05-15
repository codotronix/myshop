$(function(){
	var colors = ['Blue', 'Black', 'Red', 'Green'];
	var colorListHtml = '';
	for (var i=0; i< colors.length; i++) {
		colorListHtml += '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">'+ colors[i] +'</a></li>';
	}

	$('#colorDropDown').html(colorListHtml);

/*************** ALL CLICK EVENTS *************************/
	//mobile main menu view toggle
	$('#headSharingIconsPanel').on('click', '.showHideMainMenu', function (ev) {
		ev.stopPropagation();
		$('#headNav ul').toggle(500);
	});	

	$('#pickColor').on('click', function () {
		//console.log($(this).val());
		$('#colorDropDown').toggle();
	});

	$('#colorDropDown').on('click', 'li', function (ev) {
		ev.stopPropagation();
		var color = $(this).find('a').text();
		$('#colorDropDown').hide();
		$('body').css('background-color', color);
	});

<<<<<<< HEAD
})
=======
})
>>>>>>> origin/gh-pages
