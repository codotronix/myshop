$(function(){
	console.log("I'm ON");

	$('#Fetch').click(function(){
		$.ajax({
			type: 'POST',
			url: 'https://affiliate-api.flipkart.net/affiliate/offers/v1/top/json',			
			crossDomain: true,
			headers: {
				'Fk-Affiliate-Id':'codotroni',
				'Fk-Affiliate-Token': 'd94cfd32c8314746b46caf1f5d215197'
			},
			success: function(data){
				console.log(data);
			},
			error: function(err){
				console.log(err);
			}
		});
	});
})