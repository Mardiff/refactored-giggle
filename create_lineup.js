$(document).ready(function(){

	options = []



	// Use for new function to create pages
	$('.parse_batter_names').on('click', function(e){

		var fs = require('fs')
		var files = fs.readdirSync('Batters/')
		alert(files)
	});
});