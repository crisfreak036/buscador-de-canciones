export const contenedorBusqueda = document.querySelector('#buscar'),
            formulario = document.querySelector('#formulario-buscar'),            
            inputArtista = document.querySelector('#artista'),            
            inputCancion = document.querySelector('#cancion'),            
            encabezadoResultado = document.querySelector('.letra-resultado h2'),            
            resultado = document.querySelector('#resultado'),            
            contenedorMensajes = document.querySelector('#mensajes');

export function mostrarAlerta(mensaje, tipo, tiempo){
    if(tipo === 'error'){
        contenedorMensajes.classList.add('error');
        contenedorMensajes.textContent = mensaje;

        setTimeout(() => {
            contenedorMensajes.textContent = '';
            contenedorMensajes.classList.remove('error');
        }, tiempo);        
    }
}

export function limpiarLetraCancion(){
    encabezadoResultado.textContent = '';
    resultado.textContent = '';
}

export function mostrarLetra( cancion, artista, letra){
    encabezadoResultado.textContent = `Letra de la canción: ${cancion} de ${artista}`
    resultado.textContent = letra;
}