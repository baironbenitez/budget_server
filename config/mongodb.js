const mongoose = require('mongoose');

const conectMongodb = () => {
    mongoose.connect(process.env.MONGODB,{
        autoIndex: true,
        autoCreate: true,
    },(err)=>{
        if (err) {
          console.log('Error conectando mongo',JSON.stringify(err));
          return err;
        }
        console.log('Base de datos conectada');
    });
}

module.exports = {
    conectMongodb
}