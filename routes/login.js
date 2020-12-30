const express = require("express");
const router = express.Router();
const fs = require("fs");
const jsonwebtoken = require("jsonwebtoken");
const sha1 = require("sha1");
const { auth } = require("./../models/usuarios");
const expiration = {expiresIn: "7h", algorithm: "RS256"};
const key = fs.readFileSync("./keys/private.pem");
const createToken = payload => jsonwebtoken.sign(payload, key, expiration);

// Login con jsonwebtoken a través de usuario y password
const login = async(req, res) => {
  try {
    const {usuario, password} = req.body;
    const result = await auth(usuario, sha1(password));
    if (result.length === 0) res.status(401).json({message: "Algún dato es incorrecto, o te olvidaste de confirmar tu registro."});
    const {id} = result;
    const token = createToken({id, usuario});
    res.json({JWT: token});
  } catch (error) {
    console.error(error);
  }
};

//Rutas
router.post("/", login);

module.exports = router;
