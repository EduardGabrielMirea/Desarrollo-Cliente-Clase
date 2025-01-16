$(document).ready(function () {
   $('#iniciarEfectos').on('click',function () {
        $('#mielemento').fadeOut(2000,function () {
           $(this).slideDown(3000,function () {
            $(this).slideUp(1000);
           }); 
        });
   });
});
