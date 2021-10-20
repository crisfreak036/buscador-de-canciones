import * as UI from './interfaz.js';

class API {
    constructor( artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`

        fetch(url)
            .then( respuesta => respuesta.json())
            .then( resultado => {
                if(resultado.lyrics){
                    const { lyrics } = resultado;
                    UI.mostrarLetra(this.cancion, this.artista, lyrics);
                }else{
                    UI.limpiarLetraCancion();
                    UI.mostrarAlerta('No se encontró la canción, prueba con otra búsqueda', 'error', 4000);
                }
            })
    }
}

export default API;