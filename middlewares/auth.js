const { User } = require('../schema/user.schema')

const validateUserExistByUsername = async (req, res, next) => {

    const user = req.body;
 
    try {
        const userDb = await findUserByType('username', user.username);

        if (!userDb) {
            res.status(400).json({
                ok: false,
                message: 'Usuario o contraseña invalidos',
                statusCode: 400,
                data: {}
            });
        }else{
            req.body =  {
                password: user.password, 
                passwordUser: userDb.password,
                userId: userDb.id
            };
            next();
        }
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'hubo un error intentalo mas tarde',
            statusCode: 500,
            data: error
        });
    }
}


const findUserByType = async (type, user ) => {
    if (type === 'id') {
        return User.findById(user);
    } else {
        return User.findOne({ username: user});
    }
}


module.exports = {
    validateUserExistByUsername
}