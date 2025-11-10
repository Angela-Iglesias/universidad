const connection = require("./connection");
const express = require("express");

const app = express();
app.set("port", 3000);
app.listen(3000);

const cors = require("cors");
app.use(cors());

app.use(express.json());

// endpoint para ver todos los estudiantes
app.get("/estudiantes", (req, res) => {
    connection.query("SELECT legajo, nombre FROM estudiantes", (error, resultado) => {
        res.json(resultado);
    });
});

app.get("/estudiantes/:legajo", (req, res)=> {
    const legajo = req.params.legajo;
    connection.query("SELECT * FROM estudiantes where legajo = ?", legajo, (error, respuesta) => {
        if(error) throw error;
        res.json(respuesta);
    })
});

app.post("/estudiantes/create", (req, res) => {
    const {nombre, email} = req.body;
    connection.query("INSERT INTO estudiantes (nombre, email) VALUES (?,?)", [nombre, email], (error,resultado) => {
        if(error) throw error;
        res.json(resultado);
    })
});

app.post("/notas/create", (req, res) => {
    const {legajo_estudiante, codigo_curso, nota, fecha} = req.body;
    connection.query("INSERT INTO notas (legajo_estudiante, codigo_curso, nota, fecha) VALUES (?,?,?,?)", [legajo_estudiante, codigo_curso, nota, fecha], (error, resultado) => {
        if(error) throw error;
        res.json(resultado);
    });
});

app.get("/notas", (req, res) => {
    connection.query("SELECT * FROM notas", (error, resultado) => {
        if(error) throw error;
        res.json(resultado);
    })
});

app.put("/notas/:id/update", (req, res) => {
    const id = req.params.id;
    const {legajo_estudiante, codigo_curso, nota, fecha} = req.body;
    connection.query("UPDATE notas SET legajo_estudiante = ?, codigo_curso = ?, nota = ?, fecha = ? WHERE id = ?",[legajo_estudiante, codigo_curso, nota, fecha, id], (error, resultado) => {
        if(error) {
            console.log(error)
        }
        res.json(resultado);
    })
});

app.delete("/notas/:id/delete", (req, res) => {
    const id = req.params.id;
    connection.query("DELETE FROM notas WHERE id = ?", [id], (error, respuesta) => {
        if(error) throw error;
        res.send(respuesta);
    })
});

app.get("/notas/:codigo/aprobados", (req, res) => {
    const codigo = req.params.codigo;

    connection.query("SELECT * FROM notas WHERE codigo_curso = ? and nota >= 5", [codigo], (error, resultado) => {
        if(error) throw error;
        res.json(resultado);
    })
})

