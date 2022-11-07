
const { User } = require('../schema/user.schema')
const { createPassword } = require('../middlewares/password')

const createUser = async (req, res) => {

    let userData = req.body;
    userData.password = createPassword(userData.password);

    try {
        const userdb =  await User(userData);
        let user = await userdb.save();

        res.json({
            ok: true,
            message: 'Usuario creado con exito',
            data: {
                user
            },
            statusCode: 200
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Hubo un error creando el usuario',
            data: {},
            statusCode: 500
        });
    }
}



module.exports = {
    createUser
}