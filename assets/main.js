let lista_tareas_localStorage = [];

let editando = false;

const objetoTarea = {
    id: '',
    tarea: '',
    descripcion: ''

}

const formulario = document.querySelector('#formulario');
const nombreTareaInput = document.querySelector('#nombreTarea');
const descripcionTareaInput = document.querySelector('#descripcionTarea');
const btnAgregar = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('listado_tareas') == null) {
        localStorage.setItem('listado_tareas',JSON.stringify([]));
    }else   
        mostrarTarea();
})  


function validarFormulario(e) {
    e.preventDefault();
    
    if (nombreTareaInput.value === '' || descripcionTareaInput.value === '') {
        alert('Debe ingresar valores en ambos campos');
        return;
    }
    
    if (editando) {
        editarTarea();
        editando = false;
    }
    else {
       lista_tareas_localStorage = JSON.parse(localStorage.getItem('listado_tareas'));
       const idTarea = 'id_' + Date.now();
       
       lista_tareas_localStorage.push({
            id: idTarea,
            tarea : nombreTareaInput.value,
            descripcion: descripcionTareaInput.value
        });

        localStorage.setItem('listado_tareas',JSON.stringify(lista_tareas_localStorage));
        mostrarTarea();
    }
}



function mostrarTarea() {
    const divTarea = document.querySelector ('.div-tareas');
    divTarea.innerHTML = '';
    let lista_tareas_localStorage = JSON.parse(localStorage.getItem('listado_tareas'));
    
    lista_tareas_localStorage.forEach (miTarea => { 
        const {id,tarea, descripcion} = miTarea;
        const parrafo = document.createElement('p');
        parrafo.textContent = tarea + " " + descripcion ;
        
        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarTarea (miTarea);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarTarea (id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divTarea.appendChild(parrafo);
        divTarea.appendChild(hr);
    })
    
}

function cargarTarea(miTarea){
    const {id,tarea, descripcion} = miTarea;

    nombreTareaInput.value = tarea;
    descripcionTareaInput.value = descripcion;
    objetoTarea.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    
    editando = true;

}

function editarTarea(){
    objetoTarea.tarea = nombreTareaInput.value;
    objetoTarea.descripcion = descripcionTareaInput.value;

    lista_tareas_localStorage = JSON.parse(localStorage.getItem('listado_tareas'));
    const indice = lista_tareas_localStorage.findIndex(tarea => tarea.id === objetoTarea.id);
    
    lista_tareas_localStorage[indice].tarea = objetoTarea.tarea;
    lista_tareas_localStorage[indice].descripcion = objetoTarea.descripcion;
    localStorage.setItem('listado_tareas',JSON.stringify(lista_tareas_localStorage));

    mostrarTarea();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    
    editando = false;


}

function eliminarTarea(id){
    lista_tareas_localStorage = JSON.parse(localStorage.getItem('listado_tareas'));
    const indice = lista_tareas_localStorage.findIndex(tarea => tarea.id === id);
    lista_tareas_localStorage.splice(indice,1);
    localStorage.setItem('listado_tareas',JSON.stringify(lista_tareas_localStorage));
    
    mostrarTarea();
}





