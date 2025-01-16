document.addEventListener("DOMContentLoaded",function () {

    const form = document.getElementById("form");

    form.addEventListener("submit",function (e) {
        var nombre = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var comment = document.getElementById("comment").value;
        var status = document.getElementById("status");

        status.textContent = "";

        if (nombre === "" || email === "" || comment === "") {
            e.preventDefault();
            status.textContent = "Error: Todos los campos son obligatorios.";
        } else {
            status.textContent = "Fromulario enviado con éxito.";
        }
    });
});