$('document').ready(function(){
	$('#create').keypress(function(event){
		if(event.keyCode==13){
		      $('#list_tasks').append($('<li>').append($(this).val()));
		}
	});
});