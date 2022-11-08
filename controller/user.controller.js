
const { User } = require('../schema/user.schema')
const { createPassword } = require('../middlewares/password');
const { generateToken } = require('../middlewares/token');

const createUser = async (req, res) => {

    let userData = req.body;
    userData.password = createPassword(userData.password);

    try {
        let user =  await User.create(userData);
        user.password = undefined;
        
        const token = await generateToken(user.id);

        res.json({
            ok: true,
            message: 'Usuario creado con exito',
            data: {
                user,
                token
            },
            statusCode: 200
        });

    } catch (error) {
        const message = error.message;
        res.status(500).json({
            ok: false,
            message: 'Hubo un error creando el usuario',
            data: { message },
            statusCode: 500
        });
    }
}



module.exports = {
    createUser
}