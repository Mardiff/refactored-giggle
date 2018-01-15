$(document).ready(function(){

	var options = ['USF_Andrew_Perez.html', 'USF_Cam_Crabbe.html', 'USF_Coco_Montes.html', 'USF_Collin_Sullivan.html', 'USF_David_Villar.html', 'USF_Graham_Hoffman.html', 'USF_Kevin_King.html', 'USF_Kyle_Phillips.html', 'USF_Levi_Borders.html', 'USF_Noah_Yager.html', 'USF_Shane_McLanahan.html'];

	options.forEach(function(option){
		$('select').append('<option>'+option+'</option>');
	});

});