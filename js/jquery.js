$(document).ready(function() {
	$('body').css('opacity', '0').fadeTo(1500, 1,'swing'); 
});

$('button.submit').click(function() {
<<<<<<< HEAD
	var new_task = $('input').val() + " qty " + $('input + input').val();
=======
	var new_task = $('input').val();
>>>>>>> 257a6311db4484ef631729db6eb13470d24cc50f
	var $deleteButton = $('<button />').addClass('remove').text('Delete');
	var $li = $('<li />').text(new_task);
	var $quantityButton = $('<input type="checkbox" />');

	$('#list').append($li);
	$quantityButton.appendTo($li);
	$deleteButton.appendTo($li);
<<<<<<< HEAD
	$("form").trigger("reset");

=======
>>>>>>> 257a6311db4484ef631729db6eb13470d24cc50f

	return false;
});

<<<<<<< HEAD


=======
>>>>>>> 257a6311db4484ef631729db6eb13470d24cc50f
$('#list').on('click', '.remove', function() {
	$(this).parent().remove();
	console.log($(this));
});

<<<<<<< HEAD

$('#list').on('change', 'input[type=checkbox]', function() {
	var $li = $(this).parent();

=======
$('#list').on('change', 'input[type=checkbox]', function() {
	var $li = $(this).parent();

>>>>>>> 257a6311db4484ef631729db6eb13470d24cc50f
	if ($(this).is(':checked')){
		$li.css('textDecoration', 'line-through');
	} else {
		$li.css('textDecoration', 'none');
		return false;
	}
});