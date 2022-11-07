const bcryptjs = require('bcryptjs')
const salt = bcryptjs.genSaltSync(12);

const createPassword = (password) => {
    const pass = bcryptjs.hashSync(password,salt);
    return pass;
}

const comparePassword = (req, res, next) => {
    const  { password, passwordUser } = req.body;
    const compare = bcryptjs.compareSync(password,passwordUser);
    if (compare) {
        next();
    }else{
        res.status(400).json({
            ok: false,
            message: 'El usuario o contraseña no coinciden',
            data: {},
            statusCode: 400
        })
    }
}

module.exports = {
    createPassword,
    comparePassword
}