$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#cancelar').click(function(){
        $('form').slideUp();
    })
    
    $('#taskForm').submit(function(e){
        e.preventDefault();

        var task = $('#tarefa').val();

        $('#tasklist').append('<li>'+ task + '</li>');

        $('#tarefa').val('');
    });

    $('#tasklist').on('click', 'li', function(){
        $(this).toggleClass('completed');
    });

})