document.addEventListener("DOMContentLoaded",function () {
   var esExp = document.documentMode;
   if (esExp) {
    window.resizeTo(500,500);
   } else {
    alert("No permitido");
   }
});