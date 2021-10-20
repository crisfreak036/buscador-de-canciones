export const contenedorBusqueda = document.querySelector('#buscar'),
            formulario = document.querySelector('#formulario-buscar'),            
            inputArtista = document.querySelector('#artista'),            
            inputCancion = document.querySelector('#cancion'),            
            encabezadoResultado = document.querySelector('.letra-resultado h2'),            
            resultado = document.querySelector('#resultado'),            
            contenedorMensajes = document.querySelector('#mensajes');

export function mostrarAlerta(mensaje, tipo){
    if(tipo === 'error'){
        contenedorMensajes.classList.add('error');
        contenedorMensajes.textContent = mensaje;

        setTimeout(() => {
            contenedorMensajes.textContent = '';
            contenedorMensajes.classList.remove('error');
        }, 2500);        
    }
}