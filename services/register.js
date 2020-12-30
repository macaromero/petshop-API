const sha1 = require("sha1");
const {v4 : uid} = require("uuid");
const {create : createPersona} = require("./../models/personas");
const {create : createUsuario} = require("./../models/usuarios");
const {send} = require("./../services/mail");

// Registro de una nueva persona y usuario
const register = async({nombre, apellido, correo, tel, usuario, password} = {}) => {
    try {
        const {insertId : idPersona} = await createPersona({nombre, apellido, correo, tel});
        const confCorreo = uid();
        const {insertId : idUsuario} = await createUsuario({usuario, password : sha1(password), idPersona, confirmacionCorreo: confCorreo});  
        const mailObject = {
            correo, 
            html: `<h1 style="text-align: center; color:cadetblue;">¡Gracias por registrarte ${nombre}!</h1>
            <br>
            <a href= "http://localhost:3000/register/verify/${confCorreo}" style="color: blueviolet;"><p style="text-align: center;">Hacé click acá para continuar</p></a>`
        };
        await send(mailObject);
        
    } catch (error) {
        console.log(error)
    };
};

module.exports = {register};


