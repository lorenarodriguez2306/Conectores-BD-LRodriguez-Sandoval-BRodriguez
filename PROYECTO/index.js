const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname)));

const db = new sqlite3.Database('./libreria.db', (err) => {
    if (err) {
        console.error('Error al conectar con SQLite:', err.message);
    } else {
        console.log('¡Conexión exitosa con la Base de Datos de la Librería!');
    }
});

db.run(`CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(120) NOT NULL,
    categoria VARCHAR(20),
    precio REAL NOT NULL,
    stock VARCHAR(50) NOT NULL
)`);

app.post('/agregar', (req, res) => {
    const { nombre, categoria, precio, stock} = req.body;
    const sql = `INSERT INTO productos (nombre, categoria, precio, stock) VALUES (?, ?, ?, ?)`;
    
    db.run(sql, [nombre, categoria, precio, stock], function(err) {
        if (err) {
            return res.status(500).send('Error al guardar el producto');
        }
        res.send(`
            <div style="font-family: Arial; text-align: center; margin-top: 50px;">
                <h2 style="color: green;">Producto guardado con éxito</h2>
                <a href="/" style="font-size: 18px; text-decoration: none;">Volver al formulario</a>
            </div>
        `);
    });
});

app.get('/extraer', (req, res) => {
    const sql = `SELECT * FROM productos`;
    
    db.all(sql, [], (err, filas) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(filas);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor de la librería corriendo en http://localhost:${PORT}`);
});