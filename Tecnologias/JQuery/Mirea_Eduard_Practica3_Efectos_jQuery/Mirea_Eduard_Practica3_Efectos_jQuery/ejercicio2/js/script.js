$(document).ready(function() {
    $('body').css('background-color','blue');

    $('#contenedor').css({
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center'
    });

    $('#texto').fadeTo(500,0);

    $('#saludo').on('click',function(){
        $('#texto').fadeTo(500,1);
    });

    $('#despedida').on('click',function(){
        $('#texto').fadeTo(500,0);
    });
});