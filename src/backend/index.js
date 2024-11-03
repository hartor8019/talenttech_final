const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = 5000; // Elige un puerto para tu servidor

// Configura CORS
app.use(cors());
app.use(express.json()); // Permite que tu servidor entienda JSON

// Configura la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost', // Cambia esto si tu base de datos está en otro host
    user: 'root', // Cambia esto por tu usuario de MySQL
    password: '', // Cambia esto por tu contraseña de MySQL
    database: 'talenttech', // Nombre de la base de datos
    port: 3307
});

// Conecta a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error de conexión: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos MySQL como id ' + db.threadId);
});

// Ruta para obtener habilidades
app.get('/skills', (req, res) => {
    const query = 'SELECT * FROM skills'; // Cambia esto si tu tabla tiene un nombre diferente
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Ruta para registrar un nuevo usuario
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Verifica si ya existe un usuario con el mismo correo (opcional)
    const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(checkUserQuery, [email], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (results.length > 0) {
            return res.status(400).json({ message: 'El correo ya está en uso.' });
        }

        // Si no existe, inserta el nuevo usuario
        const insertQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        db.query(insertQuery, [name, email, password], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(201).json({ message: 'Usuario registrado exitosamente.' });
        });
    });
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
