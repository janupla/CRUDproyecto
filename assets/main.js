let listaTareas = []


const objetoTarea = {
    tarea: '',
    descripcion: ''

}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreTareaInput = document.querySelector('#nombreTarea');
const descripcionTareaInput = document.querySelector('#descripcionTarea');
const btnAgregar = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    
    
    if (nombreTareaInput.value === '' || descripcionTareaInput.value === '') {
        alert('Campos Obligatorios');
        return
    }
    
    if (editando) {
        //editarTarea();
        editando = false;
    }
    else {

        let objetoTarea = {
             tarea : nombreTareaInput.value,
             descripcion: descripcionTareaInput.value

        };
        
        agregarTarea(objetoTarea);
    }
}

function agregarTarea(objetoTarea) {
    listaTareas.push(objetoTarea);
    mostrarTarea(listaTareas);
}

function mostrarTarea(listaTareas) {
    const divTarea = document.querySelector ('.div-tareas');
    
    listaTareas.forEach (miTarea => { 
        const {tarea, descripcion } = miTarea;
        const parrafo = document.createElement('p');
        parrafo.textContent = tarea + " " + descripcion ;
        
        const editarBoton = document.createElement('button');
        //editarBoton.onclick = () => cargarTarea (tarea);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        //eliminarBoton.onclick = () => eliminarTarea (id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divTarea.appendChild(parrafo);
        divTarea.appendChild(hr);
    })
    
}





