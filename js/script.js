$(function(){
	console.log("I'm ON");

	$('#Fetch').click(function(){
		$.ajax({
			type: 'GET',
			url: 'https://affiliate-api.flipkart.net/affiliate/feeds/codotroni/category/v1:jek-6l2.json?expiresAt=1431135524131&sig=62e9d44dfd220b8e4470d1bb0687137b',			
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
