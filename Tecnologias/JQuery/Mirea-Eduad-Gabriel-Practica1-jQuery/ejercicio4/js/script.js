$(document).ready(function () {
    $('#crear').on('change',function () {
        if ($(this).prop('checked')) {
            const inputSumar = $('<input>')
                                .attr('id','sumar')
                                .attr('type','number'); //El .attr() modifica todas las clases y elimina las que no has añadido.
                                //Para añadir solo deberiamos usar .addClass()
            $('.nuevo').append(inputSumar);

            var valorNum1 = parseFloat($('#num1').val());
            var valorNum2 = parseFloat($('#num2').val());

            $('#sumar').val(valorNum1 + valorNum2);

        } else {
            $('#sumar').remove();
        }
    });
});