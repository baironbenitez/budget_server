require('dotenv').config();
const express = require('express');
const { conectMongodb } = require('./config/mongodb');
const routesUser = require('./routes/user.route')
const routesAuth = require('./routes/auth.route')

const app = express();
const port = process.env.PORT || 3000;

app.use( express.json());

app.use('/user',routesUser);
app.use('/auth',routesAuth);

app.listen(port,() =>{
    console.log(`Aplicacion corriendo en el puerto ${port}`);
    conectMongodb();
});