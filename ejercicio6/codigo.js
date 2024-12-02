function hideContent(e, index) {
    var p = document.getElementById('p-' + index);
    if(e.innerText == 'Ocultar contenidos'){
        p.classList.add('hidden');
        e.innerText = 'Mostrar contenidos';
    } else {
        p.classList.remove('hidden');
        e.innerText = 'Ocultar contenidos';
    }
}