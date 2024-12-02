function toggleText(e) {
    var text = e.innerText;
    if(text == 'Seguir leyendo'){
        e.innerText = 'Ocultar exceso de texto';
        document.getElementById('hiddenspan').classList.remove('hidden');
    } else {
        
        document.getElementById('hiddenspan').classList.add('hidden');
        e.innerText = 'Seguir leyendo';
    }
}