const {  User } = require('../schema/user.schema')

const findUserByUsername = async (req, res, next) => {
    const { username } = req.body;

    try {

        const user = await User.findOne({ username });

        if (user) {
            res.status(400).json({
                ok: false,
                message: 'El usuario ya se encuentra registrado',
                data: { username },
                statusCode: 400
            });
        }else{
            next();
        }

    } catch (error) {
        const message = error.message;
        res.status(500).json({
            ok: false,
            message: 'Hubo un error, intentalo mas tarde',
            data: { message },
            statusCode: 500
        });
    }
}

const findUserById = async (req, res, next) => {
    const { userId } = req.body;

    try {

        const user = await User.findById(userId);

        if (user) {
            next();
            
        }else{
            res.status(404).json({
                ok: false,
                message: 'El usuario no existe o no se encuentra registrado',
                data: {},
                statusCode: 404
            });
        }

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Hubo un error, intentalo mas tarde',
            data: {},
            statusCode: 500
        });
    }
}

module.exports = {
    findUserByUsername,
    findUserById
}