require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routesUser = require('./routes/user.route');
const routesAuth = require('./routes/auth.route');
const routesBudget = require('./routes/budget.route');
const routesTransaction = require('./routes/transaction.route');

const { conectMongodb } = require('./config/mongodb');;
const { exitsToken, validateToken } = require('./middlewares/token');

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
app.use('/budget',exitsToken,validateToken,routesBudget);
app.use('/transaction',exitsToken,validateToken,routesTransaction);

app.listen(port,() =>{
    console.log(`Aplicacion corriendo en el puerto ${port}`);
    conectMongodb();
});