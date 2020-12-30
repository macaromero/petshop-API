const Joi = require("@hapi/joi");

//Esquema de validación para el ingreso y modificación de categorías
const schemas = {
    validation: Joi.object().keys({
        nombre: Joi.string().required()
    })
};

module.exports = {schemas};