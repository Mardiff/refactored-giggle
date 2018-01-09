$(document).ready(function(){
	alert('document ready');
	console.log('document ready');
	
	$.get('hello.php', function(data){
		alert(data);
	});
});
