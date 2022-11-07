const { generateToken } = require("../middlewares/token");

const login =  async (req, res) => {
    
    const { userId } = req.body;
    
    const token = await generateToken(userId);

    res.json({
        ok: true,
        statusCode: 200,
        data:{ token },
        message: 'Usuario logueado con exito'
    });
}

module.exports = {
    login
}