$(document).ready(function(){
	$.get('hello.php', function(data){
		alert(data)
	});
});