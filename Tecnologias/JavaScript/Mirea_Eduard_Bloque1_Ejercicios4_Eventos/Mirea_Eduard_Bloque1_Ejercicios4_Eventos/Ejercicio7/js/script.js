 // Mostrar mensaje de alerta al cargar la página
 window.onload = function() {
    alert('Página que contiene un reloj digital');
    iniciarReloj();
  };

  // Mostrar mensaje de alerta al abandonar la página
  window.onbeforeunload = function() {
    return 'Página cancelada';
  };

  // Función para iniciar el reloj
  function iniciarReloj() {
    function actualizarReloj() {
      const ahora = new Date();
      const horas = String(ahora.getHours()).padStart(2, '0');
      const minutos = String(ahora.getMinutes()).padStart(2, '0');
      const segundos = String(ahora.getSeconds()).padStart(2, '0');
      document.getElementById('reloj').textContent = `${horas}:${minutos}:${segundos}`;
    }
    setInterval(actualizarReloj, 1000);
  }