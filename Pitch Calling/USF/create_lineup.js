$(document).ready(function(){

	var options = [];

	$("#parse_batter_names").click(function() {
		$.get('create_lineup.php', function(data){
			alert(data);
		});
	});
});