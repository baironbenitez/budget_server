const jsonWebToken = require('jsonwebtoken')

const secret = process.env.SECRET_TOKEN;

const generateToken =  ( userId ) => {
    return new Promise((resolve) => {
        jsonWebToken.sign({ userId } , secret ,{ expiresIn: '24h' }, (e,jwt) => {
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
            req.body.userId = decoded;
            next();
        }
    })
}

module.exports = {
    generateToken,
    validateToken
}