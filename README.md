# Budget Server

Proyecto generado con `Node Express MongoDb` Node v16.18.0

# Pasos para iniciar el proyecto

# 1 Instalacion de dependencias
npm i

# 2 Variables de entorno
Crear archivo .env con las siguientes variables de entorno
[PORT] puerto del servidor
[MONGODB] url conexion a la base de datos
[SECRET_TOKEN] secreto para autenticacion de JWT

En caso de no tener instalo mongodb usar `MongoDb Atlas` https://www.mongodb.com/atlas/database

## Servidor de desarrollo

Ejecute `npm run dev` para un servidor de desarrollo en `http://localhost:3000/` [3000] puerto tomado de las variables de entorno, para actualizar archivos en tiempo real con nodemon.

## Iniciar proyecto
Ejecute `npm run start` para un servidor de desarrollo en `http://localhost:3000/` [3000] puerto tomado de las variables de entorno