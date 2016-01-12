$(document).ready(function() {
 $('button').click(function() {

    var new_task = $('#input').val();
    $('#list').append('<li>'+new_task+'</li>');
     return false;
 });
});