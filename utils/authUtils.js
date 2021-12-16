const { sign } = require('jsonwebtoken');
const { User } = require("../models/User");


const getTokenPair = async (user) => {
    const accesToken = await sign(
        { _id: user._id, rol: user.rol, usrname: user.usrname },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: '5m' });
    const refreshToken = await sign(
        { _id: user._id, rol: user.rol, usrname: user.usrname },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: '7d' });

    console.log("Tokens generados ");
    console.log({ refreshToken, accesToken });
    return { refreshToken, accesToken };
}

const validarUsuario = async (usuario_peticion)=>{

    const user = await User.findOne({ usrname: usuario_peticion.usrname});
    
    if (!user) throw new Error('Usuario o contraseña no valido.');
    console.log('Validando login...');
    const passwordMatch = await user.compararPasswords(usuario_peticion.password);
    if (!passwordMatch) throw new Error('Usuario o contraseña no valido.');

    return await getTokenPair(user);
}

exports.validarUsuario = validarUsuario;
exports.getTokenPair = getTokenPair;