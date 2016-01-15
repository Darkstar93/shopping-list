$(document).ready(function (){
$('body').css('opacity', '0').fadeTo(1500, 1,'swing'); 
});

$('button.submit').click(function(){

	var new_task = $('input').val();
	var $deleteButton = $('<button />').addClass('remove').text('Delete');
	var $li = $('<li />').text(new_task);
	var $quantityButton = $('<button />').addClass('quantity').text('Qty');


	$('#list').append($li);
	$quantityButton.appendTo($li);
	$deleteButton.appendTo($li);



	return false;
});

$('#list').on('click', '.remove', function() {
		$(this).parent().remove()

		console.log($(this))


});

$('#list').on('change', 'input[type=checkbox]', function(){
	var input= $(this).parent().find('input[type=text]');
	if ($(this).is(':checked')){
		$(input).css('textDecoration', 'line-through');
	}else{
		$(input).css('textDecoration','none');
	return false;

}


});
	
