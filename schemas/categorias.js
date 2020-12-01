const Joi = require("@hapi/joi");


const schemas = {
    validation: Joi.object().keys({
        nombre: Joi.string().required()
    })
};

module.exports = {schemas};