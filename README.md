## Descripción del Proyecto

Este proyecto es parte del curso de **JavaScript** y tiene como objetivo **gestionar los datos de una universidad** de manera sencilla mediante una **API y una interfaz web**. 
Permite consultar, agregar, modificar y eliminar información sobre estudiantes y sus notas de exámenes.

La aplicación está compuesta por los siguientes elementos principales:

### Backend: API con ExpressJS

* Se utiliza **Node.js** con **ExpressJS** para crear la API.
* La API se conecta a una base de datos **MySQL** que almacena la información de los estudiantes y sus notas.
* Los endpoints principales son:
  * `GET /estudiantes`: Obtiene todos los estudiantes.
  * `GET /estudiantes/:legajo`: Obtiene un estudiante según su legajo.
  * `POST /estudiantes/create`: Inserta un nuevo estudiante en la base de datos.
  * `POST /notas/create`: Inserta la nota de un examen para un estudiante.
  * `GET /notas`: Obtiene todas las notas registradas.
  * `PUT /notas/:id/update`: Modifica una nota existente según su ID.
  * `DELETE /notas/:id/delete`: Elimina una nota según su ID.
  * `GET /notas/:codigo/aprobados`: Obtiene todas las notas aprobadas de un curso específico.

### Frontend: Interfaz Web

* Se utiliza **HTML, CSS y JavaScript** para crear la interfaz de usuario.
* La página web permite:
  * Ver la lista de estudiantes.
  * Consultar un estudiante específico por su legajo.
  * Agregar nuevos estudiantes y sus notas.
  * Modificar notas existentes.
  * Eliminar notas de exámenes.
  * Consultar los exámenes aprobados de un curso.
* La interfaz se comunica con la API mediante **fetch** para enviar y recibir datos en formato **JSON**.

### Base de Datos

* La base de datos MySQL contiene al menos dos tablas:

  * `estudiantes` (legajo, nombre, email)
  * `notas` (id, legajo_estudiante, codigo_curso, nota, fecha)
* La conexión con la base de datos se establece mediante el archivo `connection.js`.

### Funcionamiento General

1. El usuario abre la página web.
2. La web envía solicitudes HTTP a la API según las acciones que realiza el usuario.
3. La API consulta o modifica la base de datos según la solicitud.
4. La respuesta de la API se muestra en la página web para que el usuario vea los datos en tiempo real.

### Tecnologías utilizadas

* Node.js
* ExpressJS
* MySQL
* HTML / CSS / JavaScript
* Fetch API

