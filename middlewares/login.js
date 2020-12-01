const fs = require("fs");
const jsonwebtoken = require("jsonwebtoken");
const key = fs.readFileSync("./keys/public.pem");

// Validación de jsonwebtoken
const secured = (req, res, next) => {
    try {
        const {authorization} = req.headers;
        const {id} = jsonwebtoken.verify(authorization, key);
        req.id = id;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({message: "No estás autorizado para acceder."});
    };
};

module.exports = {secured};