# CRUDproyecto
El proyecto consiste en crear un formulario que permite agregar, editar y eliminar distintas tareas con su respectiva descripción.
Consta de tres archivos Html semántico, CSS y JS. 
Para HTML tenemos sección header y footer, además de body en la cual encontraremos un "section".
Dentro de "section" se muestran contenedores "divs" donde se especifica un formulario con dos input texto y botón tipo submit con sus respectivos ID y clases. 
Con los ID y clases definidos se trabaja en el archivo Javascript.
En Javascript:
Se define un arreglo que permite manipular la información almacenada en el localstorage.
Para localstorage se define un elemento llamado "listado_tareas" que almacenará el arreglo antes señalado.
Las tres operaciones realizadas fueron Ingresar, Editar y Eliminar.
Ingresar o agregar tarea: Se controla que los input text tengan valores de los contrario veremos el mensaje de advertencia. Al ingresar información se guardan valores en localstorage mediante médtodo "push".
En Editar: Se identifica el elemento específico a modificar mediante el método "findIndex" y se actualiza en localstorage.
En Eliminar: Se identifica el elemento específico a eliminar con "findIndex", pero adicionalmente con método "splice" se procede a eliminar el elemento seleccionado.
Por su parte, para un correcto uso de localstorage en todas las operaciones descritas se valida la existencia de elementos previos (datos) para evitar sobreescribir los datos almacenados.
Por último en el archivo CSS se encuentran los estilos definidos a los contenedores y botones, además de los media queries que otorgan responsividad al proyecto Crud.

