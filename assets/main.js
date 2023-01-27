let listaTareas = [],

    const objetoTarea = {

        id: '',
        tarea: '',
        descripción: ''

    }

let editando = false;

const formulario = document.querySelector('#formulario');
const tareaImput = document.querySelector('#Tarea');
const tareaDescripcion = document.querySelector('#Descripción');
const btnAgregar = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if (tareaImput.value === '' || tareaDescripcion.value === '') {
        alert('Campos Obligatorios');
        return
    }

    if (editando) {
        //editarTarea();
        editando = false;
    }
    else {
        objetoTarea.id = Date.now();
        objetoTarea.tarea = tareaImput.value;
        objetoTarea.descripción = tareaDescripcion.value;

        agregarTarea();
    }
}

function agregarTarea() {
    listaTareas.push({ ...objetoTarea })

    mostrarTarea();
}

function mostrarTarea() {
    const divTarea = document.querySelector ('.div-tarea'
    
    listaTareas.forEach(tarea => { 
        const { id, tarea, descripción } = tarea;
        const parrafo = document.createElement('p');
        parrafo.textContent = '${id} - ${tarea} - ${descripción} -';
        parrafo.dataset.id = id;

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





