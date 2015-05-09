$(function(){
/*************** ALL CLICK EVENTS *************************/
	//mobile main menu view toggle
	$('#headSharingIconsPanel').on('click', '.showHideMainMenu', function (ev) {
		ev.stopPropagation();
		$('#headNav ul').toggle(500);
	});
	
	$('.btnChooseColor').click(function () {
		$('#pickColor').show().trigger('click');
	})

	$('#pickColor').on('change', function () {
		//console.log($(this).val());
		$('body').css('background', $(this).val());
	})
})