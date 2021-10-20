import * as UI from './interfaz.js';

UI.formulario.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();
    // Obtencion de datos del formulario
    const artista = UI.inputArtista.value;
    const cancion = UI.inputCancion.value;

    // Valida que los valores sean correctos
    if(artista === '' || cancion === ''){
        UI.contenedorMensajes.classList.add('error');
        UI.contenedorMensajes.textContent = '¡Error! Todos los campos son obligatorios'

        setTimeout(() => {
            UI.contenedorMensajes.textContent = '';
            UI.contenedorMensajes.classList.remove('error');
        }, 2500);

        return;
    }

    // Consultar API
}