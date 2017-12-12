$(document).ready(function(){
	$('.modal').modal();
	$('#save').click(save);
	function save(){
	var name = $('#icon_prefix').val();
	var phone = $('#icon_telephone').val();
	var mail = $('#icon_mail').val();
	$('#cards').append('<div class="col s12 m7"><div class="card horizontal"><div class="card-stacked"><div class="card-content"><h4>' + name + '</h4><p>' + phone + '</p><p>' + mail + '</p></div><div class="card-action"><a href="#"><i class="fa fa-trash"></i></a></div></div></div></div>');
	};
});