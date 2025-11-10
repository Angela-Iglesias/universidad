async function verEstudiantes() {
    const peticion = await fetch("http://127.0.0.1:3000/estudiantes");
    const resultado = await peticion.json();
    
    const parrafo = document.getElementById("estudiantes");
    parrafo.textContent = JSON.stringify(resultado);
}

async function verEstudiante() {
    let input = +document.getElementById("estudiante").value;
    const peticion = await fetch("http://127.0.0.1:3000/estudiantes/" + input);
    const respuesta = await peticion.json();
    
    const resultadoEstudiante = document.getElementById("resultadoEstudiante");
    resultadoEstudiante.textContent = JSON.stringify(respuesta);
    
}

async function introducirEstudiante() {
    const nombreEstudiante = document.getElementById("nombre").value;
    const emailEstudiante = document.getElementById("email").value;

    const peticionPost = await fetch("http://127.0.0.1:3000/estudiantes/create", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            nombre: nombreEstudiante,
            email: emailEstudiante,
        })
    });

    alert(`El estudiante ${nombreEstudiante} ha sido añadido a nuestra base de datos`);
    verEstudiantes();

}

async function introducirNota() {
    const legajoEstudiante = document.getElementById("legajoEstudiante").value;
    const codigoCurso = document.getElementById("codigoCurso").value;
    const notaExamen = document.getElementById("nota").value;
    const fechaExamen = document.getElementById("fecha").value;

    const peticion = await fetch("http://127.0.0.1:3000/notas/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            legajo_estudiante: legajoEstudiante, 
            codigo_curso: codigoCurso,
            nota: notaExamen,
            fecha: fechaExamen

        })
    });

    alert(`La nota del examen del curso con el codigo ${codigoCurso} ha sido introducida`);
    verNotas();
}

//Función para ver las notas
async function verNotas() {
    const peticion = await fetch("http://127.0.0.1:3000/notas");
    const respuesta = await peticion.json();
    
    const mostrarNotas = document.getElementById("mostrarNotas");
    mostrarNotas.textContent = JSON.stringify(respuesta);
};

async function modificarNota() {

    const id = document.getElementById("idNota").value;

    const legajoModificar = document.getElementById("legajoEstudianteModificar").value;
    const codigoCursoModificar = document.getElementById("codigoCursoModificar").value;
    const notaModificar = document.getElementById("notaModificar").value;
    const fechaModificar = document.getElementById("fechaModificar").value;
    
    const peticion = await fetch("http://127.0.0.1:3000/notas/" +id +"/update", {
        method: "PUT",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            legajo_estudiante: legajoModificar,
            codigo_curso: codigoCursoModificar,
            nota: notaModificar,
            fecha: fechaModificar
        })
    });

    verNotas();
}

async function eliminarNota() {
    const id = document.getElementById("idNotaEliminar").value;

    const peticion = await fetch("http://127.0.0.1:3000/notas/" + id + "/delete", {
        method: "DELETE",
    });

    verNotas();

}

async function consultarExamenesCurso() {
    const codigo = document.getElementById("codigoC").value;

    const peticion = await fetch("http://127.0.0.1:3000/notas/" + codigo + "/aprobados");
    const resultado = await peticion.json();

    const p = document.getElementById("examenesAprobadosCurso");
    p.textContent = JSON.stringify(resultado);
    
}