class Libro {
    //propiedades
    id = 0;
    autor = '';
    titulo = '';

    agregar(infoLibro){
        
        
        this.autor = infoLibro.autor;
        this.titulo = infoLibro.titulo;
        this.id = infoLibro.id;
        // console.log(this.id,this.autor,this.titulo);

        const tr = document.createElement('tr');
        tr.setAttribute('id',`${this.id}`);
        tr.innerHTML = `<th scope="row">${this.id}</th>
        <td>${this.titulo}</td>
        <td>${this.autor}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button id="editar${this.id}" type="button" class="btn btn-outline-warning"><i class="fas fa-pencil-alt"></i></button>
                <button id="eliminar${this.id}" type="button" class="btn btn-outline-danger"><i class="fas fa-times"></i></button>
            
            </div>
        </td>`;
        //LocalStorageOperation.almacenarLibro(infoLibro);
        return tr;
    }

    eliminar(element) {
        // Entran I O BUTTON
        if(element.tagName === 'I' ){
            element.parentElement.parentElement.parentElement.parentElement.remove();
            LocalStorageOperation.borrarLibro(element.parentElement.parentElement.parentElement.parentElement.id)
        }else if(element.tagName === 'BUTTON'){
            element.parentElement.parentElement.parentElement.remove();
            LocalStorageOperation.borrarLibro( element.parentElement.parentElement.parentElement.id);
        }

    }
}