const express = require("express");
const router = express.Router();
const { validateCreate } = require("./../middlewares/usuarios");
const { register } = require("./../services/register");
const { newUser } = require("./../models/usuarios");

// POST de un nuevo usuario
const create = async (req, res) => {
  try {
   const {body : usuario} = req;
   await register(usuario);
   res.json({message: `Te registraste correctamente ${usuario.nombre}. Revisá tu casilla de mail y seguí los pasos para finalizar el proceso de registro.`});  
  } catch (error) {
   res.status(500).json({message: "¡Ups! Ocurrió un error.", error});
   console.log(error); 
  }
};

// GET de una url enviada por correo que verifica el registro, donde el campo "habilitado" pasa a true
const verifyNewUser = async (req, res) => {
  try {
    const {uid} = req.params;
    await newUser(uid);
    res.json({message: "Registro completado. ¡Ya podés loguearte y acceder a todo el contenido de la Api!"});
  } catch (error) {
    res.status(500).json({message: "¡Ups! Ocurrió un error.", error});
    console.log(error);
  }
};

// Rutas
router.post("/", validateCreate, create);
router.get("/verify/:uid", verifyNewUser);

module.exports = router;
