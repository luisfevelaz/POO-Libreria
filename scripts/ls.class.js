class LocalStorageOperation{
    static almacenarLibro(infoLibro){
        // console.log(infoLibro);
        let arrayLibros = this.obtenerLS();
        arrayLibros.push(infoLibro);
        // console.log(arrayLibros);
        localStorage.setItem('Libros', JSON.stringify(arrayLibros));
    }
    
    static obtenerLS(){
        if(localStorage.getItem('Libros') === null){
            // console.log('Vacío');
            return [];
        }else{
            // console.log('Sí hay libros');
            return JSON.parse(localStorage.getItem('Libros'));
        }
    }

    static borrarStorage() {
        localStorage.clear();
    }

    static borrarLibro(idLibro) {
        console.log(idLibro);
        let arrayLibros = this.obtenerLS();
        let arrayNuevo = [];

        for(let i = 0; i < arrayLibros.length; i++){
            if(idLibro != arrayLibros[i].id){
                arrayNuevo.push(arrayLibros[i]);
            }
        }
        console.log(arrayNuevo);

        localStorage.setItem('Libros',JSON.stringify(arrayNuevo));

        // localStorage.clear();
        // if(arrayNuevo.length > 0){
        //     localStorage.setItem('Libros',JSON.stringify(arrayNuevo));
        // }
    }

    static ultimoID(){
        let arrayLibro=this.obtenerLS();

        if(arrayLibro == 0){
            return 0;
        }
        else{
            return (arrayLibro[arrayLibro.length-1].id+1);
        }
    }

    static buscarTitulo(tituloLibro){
        console.log(tituloLibro);

        let arrayLibros = this.obtenerLS();
        let resultado = '';

        for(let i = 0; i < arrayLibros.length; i++){
            if(arrayLibros[i].titulo.toLowerCase() == tituloLibro){
                return resultado=arrayLibros[i];
            }
        }
        return resultado;
    }

    static noRepetir(infoLibro){
        let arrayLibros = this.obtenerLS();
        let auxiliar = '';

        for(let i = 0; i< arrayLibros.length; i++){
            if(arrayLibros[i].titulo.toLowerCase() == infoLibro.titulo.toLowerCase() && arrayLibros[i].autor.toLowerCase() == infoLibro.autor.toLowerCase()){
                return 'exito';
            }
        }
        return auxiliar;
    }
}