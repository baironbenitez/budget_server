const jsonWebToken = require('jsonwebtoken')

const secret = process.env.SECRET_TOKEN;

const generateToken =  ( user ) => {
    return new Promise((resolve) => {
        jsonWebToken.sign({ user } , secret ,{ expiresIn: '24h' }, (e,jwt) => {
            if (e) {
                resolve(null)
            }else{
                resolve(jwt)
            }
        })
    })

}

const validateToken = ( req, res, next ) => {
    const { token } = req.headers;
   
    jsonWebToken.verify(token, secret, (err, decoded)=> {
        if (err) {
            res.status(401).json({
                ok: false,
                message: 'Usuario no autenticado',
                data: {},
                statusCode: 401
            })
        }else{
            req.user = decoded.user;
            next();
        }
    })
}

const exitsToken = (req, res, next) => {
    const token = req.headers['token'];
    if (!token || typeof token !== 'string') {
        res.status(403).json({
            ok: false,
            message: 'Recurso no autorizado',
            statusCode: 403,
            data: { token }
        })
    }else{
        next();
    }
}

module.exports = {
    generateToken,
    validateToken,
    exitsToken
}