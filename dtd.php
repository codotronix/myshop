<?php
//Include the class.
include "clusterdev.flipkart-api.php";

//Replace <affiliate-id> and <access-token> with the correct values
	$flipkart = new \clusterdev\Flipkart("codotroni", "d94cfd32c8314746b46caf1f5d215197", "json");


	$dotd_url = 'https://affiliate-api.flipkart.net/affiliate/offers/v1/dotd/json';

	$details = $flipkart->call_url($dotd_url);

		if(!$details){
			echo 'Error: Could not retrieve DOTD.';
			exit();
		}

	//The response is expected to be JSON. Decode it into associative arrays.
	//$details = json_decode($details, TRUE);

	echo '<div id="dtdOffersDiv">';
	echo $details;
	echo '</div>';

	try {
	//write the json to a file
		$myfile = fopen("dealsOfTheDay.json", "w") or die("Unable to create/open file!");
		fwrite($myfile, $details);
		fclose($myfile);
	} catch(Exception $ex) {
		echo $ex->getMessage();
	}
?>
<script>
	var JSONString = document.getElementById('dtdOffersDiv').innerText;
	var JSONObj = JSON.parse(JSONString);
	console.log(JSONObj);
</script>