const {schemas} = require("./../schemas/productos");

//Validación del esquema de creación de un producto
const validateCreate = (req, res, next) => {
    const {error, value} = schemas.create.validate(req.body);
    error ? res.status(422).json({error: error.details[0].message}) : next();
};

//Validación del esquema de modificación de un producto
const validateModify = (req, res, next) => {
    const {error, value} = schemas.modify.validate(req.body);
    error ? res.status(422).json({error: error.details[0].message}) : next();
};

module.exports = {validateCreate, validateModify};