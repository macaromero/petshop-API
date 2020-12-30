const Joi = require("@hapi/joi");

//Esquema de validación para el alta de usuarios
const schemas = {
    create: Joi.object().keys({
        nombre: Joi.string().required(),
        apellido: Joi.string().required(),
        correo: Joi.string().email().lowercase().required(),
        tel: Joi.number().positive().required(),
        usuario: Joi.string().min(3).max(9).required(),
        password: Joi.string().min(4).max(7).required()
    }),
    modify: Joi.object().keys({
        nombre: Joi.string(),
        apellido: Joi.string(),
        correo: Joi.string().email().lowercase(),
        tel: Joi.number().positive(),
        usuario: Joi.string().min(3).max(9),
        password: Joi.string().min(4).max(7)
    })
};

module.exports = {schemas};