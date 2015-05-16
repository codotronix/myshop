$(function(){
	'use strict';
/*************** The color picker start ***************************/
	var colors = ['Blue', 'Black', 'Red', 'Green'];
	var colorListHtml = '';
	for (var i=0; i< colors.length; i++) {
		colorListHtml += '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">'+ colors[i] +'</a></li>';
	}

	$('#colorDropDown').html(colorListHtml);
//////////////////// The color picker end /////////////////////////

/******************* top Carousel auto rotate ********************/
	var leftArrowClicked = false;
	$('.jcarousel-control-prev').click(function () {
		leftArrowClicked = true;
	});

	function autoRightScroll () {
		if (leftArrowClicked) {
			leftArrowClicked = false;
		}
		else {
			$('.jcarousel-control-next').trigger('click');
		}

		setTimeout(autoRightScroll, 1500);
	}

	autoRightScroll();
///////////////////////////////////////////////////////////////////


/************************* ALL EVENTS ****************************/
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
/////////////////////////////////////////////////////////////////////
})