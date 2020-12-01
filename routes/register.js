const express = require("express");
const router = express.Router();
const {register} = require("../services/register");

// POST de un nuevo usuario
const create = async(req, res) => {
  try {
    const {body : usuario} = req;
    await register(usuario);
    res.json({message: `Te registraste correctamente ${usuario.nombre}. Revisá tu casilla de mail y seguí los pasos para finalizar el proceso de registro.`});
  } catch (error) {
    res.status(500).json({message: "¡Ups! Ocurrió un error.", error});
    console.log(error);
  }
};


router.post("/", create);
module.exports = router;