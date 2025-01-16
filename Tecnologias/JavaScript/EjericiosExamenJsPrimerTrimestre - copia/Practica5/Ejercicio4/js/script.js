document.addEventListener("DOMContentLoaded",function () {
    
    const checkboxNegrita = document.getElementById('negrita');
    const checkboxCursiva = document.getElementById('cursiva');
    const parrafo = document.getElementById('miParrafo');
    
    checkboxNegrita.addEventListener('change', () => {
        if (checkboxNegrita.checked) {
            parrafo.style.fontWeight = 'bold';
        } else {
            parrafo.style.fontWeight = 'normal';
        }
    });
    
    checkboxCursiva.addEventListener('change', () => {
        if (checkboxCursiva.checked) {
            parrafo.style.fontStyle = 'italic';
        } else {
            parrafo.style.fontStyle = 'normal';
        }
    });
})