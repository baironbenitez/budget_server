require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { conectMongodb } = require('./config/mongodb');
const routesUser = require('./routes/user.route');
const routesAuth = require('./routes/auth.route');
const routesBudget = require('./routes/budget.route');

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: "http://localhost:4200",
    methods: ["GET","POST"]
};

app.use( express.json());
app.use(cors(corsOptions));

app.use('/user',routesUser);
app.use('/auth',routesAuth);
app.use('/budget',routesBudget);

app.listen(port,() =>{
    console.log(`Aplicacion corriendo en el puerto ${port}`);
    conectMongodb();
});