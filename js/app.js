import * as UI from './interfaz.js';
import API from './api.js';

UI.formulario.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();
    // Obtencion de datos del formulario
    const artista = UI.inputArtista.value;
    const cancion = UI.inputCancion.value;

    // Valida que los valores sean correctos
    if(artista === '' || cancion === ''){
        UI.mostrarAlerta('¡Error! Todos los campos son obligatorios', 'error', 2500);
        return;
    }

    // Consultar API y muestra el resultado en el DOM
    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();
}