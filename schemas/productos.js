const Joi = require("@hapi/joi");

const numbers = Joi.number().positive()

//Esquema de validación para el ingreso y modificación de productos
const schemas = {
    create: Joi.object().keys({
        nombre: Joi.string().required(),
        descripcion: Joi.string().required(),
        precioUnitario: numbers.required(),
        idCategoria: numbers.required()
    }),
    modify: Joi.object().keys({
        nombre: Joi.string(),
        descripcion: Joi.string(),
        precioUnitario: numbers,
        idCategoria: numbers
    })
};

module.exports = {schemas};