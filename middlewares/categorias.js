const {schemas} = require("./../schemas/Categorias");

//Validación del esquema de creación y modificación de una categoría
const validate = (req, res, next) => {
    const {error, value} = schemas.validation.validate(req.body);
    error ? res.status(422).json({error: error.details[0].message}) : next();
};


module.exports = {validate};