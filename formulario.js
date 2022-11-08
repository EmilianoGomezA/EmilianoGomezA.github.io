var abrirForm = document.getElementById('abrir_form'),
    overlay = document.getElementById('overlay'),
    formulario = document.getElementById('formulario'),
    cerrarForm = document.getElementById('cerrar_form');

abrirForm.addEventListener('click', function(){
    overlay.classList.add('active');
    formulario.classList.add('active');
});

cerrarForm.addEventListener('click', function(){
    overlay.classList.remove('active');
    formulario.classList.remove('active');
});

