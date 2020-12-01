const sha1 = require("sha1");
const {v4 : uid} = require("uuid");
const {create : createPersona} = require("./../models/personas");
const {create : createUsuario} = require("./../models/usuarios");

// Registro de una nueva persona y usuario
const register = async({nombre, apellido, correo, tel, usuario, password} = {}) => {
    try {
        const {insertId : idPersona} = await createPersona({nombre, apellido, correo, tel});
        const {insertId : idUsuario} = await createUsuario({usuario, password : sha1(password), idPersona, confirmacionCorreo: uid()});
        //ACA VA LO DEL MAIL
        
    } catch (error) {
        console.log(error)
    };
};

module.exports = {register};


