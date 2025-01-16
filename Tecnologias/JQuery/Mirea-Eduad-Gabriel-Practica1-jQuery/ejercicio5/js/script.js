$(document).ready(function () {
    // Manejar eventos con switch
    $('p').on('mouseover mouseout', function (event) {
        switch (event.type) {
            case 'mouseover':
                $(this).addClass('cambioTamanio');
                break;
            case 'mouseout':
                $(this).removeClass('cambioTamanio');
                break;
        }
    });
});
