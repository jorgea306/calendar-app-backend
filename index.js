const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

console.log(process.env);

//Crear el servidor de express
const app = express();

//Base de Datos
dbConnection();

//CORS
app.use(cors());

//Directorio Publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
//TODO:auth//crear, login, renew
app.use('/api/auth', require('./routes/auth'));
//Eventos
app.use('/api/events', require('./routes/events'));

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});