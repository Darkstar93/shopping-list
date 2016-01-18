$(document).ready(function() {
	$('body').css('opacity', '0').fadeTo(1500, 1,'swing'); 
});

$('button.submit').click(function() {
	var new_task = $('input').val() + "          " + $('input + input').val();
	var $deleteButton = $('<button />').addClass('remove').text('Delete');
	var $li = $('<li />').text(new_task);
	var $quantityButton = $('<input type="checkbox" />');

	$('#list').append($li);
	$quantityButton.appendTo($li);
	$deleteButton.appendTo($li);
	$("form").trigger("reset");


	return false;
});



$('#list').on('click', '.remove', function() {
	$(this).parent().remove();
	console.log($(this));
});


$('#list').on('change', 'input[type=checkbox]', function() {
	var $li = $(this).parent();

	if ($(this).is(':checked')){
		$li.css('textDecoration', 'line-through');
	} else {
		$li.css('textDecoration', 'none');
		return false;
	}
});