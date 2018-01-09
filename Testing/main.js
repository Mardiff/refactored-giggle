$(document).ready(function(){
	alert('document ready');
	
	$.get('hello.php', function(data){
		alert(data);
	});
});
