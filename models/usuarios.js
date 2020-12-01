const pool = require("../utils/bd");
const T_USUARIOS = "usuarios";
const T_PERSONAS = "personas";

// INSERT de un nuevo usuario        
const create = ({usuario, password, idPersona, confirmacionCorreo}) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_USUARIOS, {usuario, password, idPersona, confirmacionCorreo}])
    .then((result) => result)
    .catch((e) => console.log(e));

// SELECT de un usuario para realizar el login
const auth = (usuario, password) => 
    pool
      .query ("SELECT id, usuario FROM ?? WHERE usuario = ? AND password = ? AND habilitado = ?", [T_USUARIOS, usuario, password, true])
      .then ((result) => result)
      .catch ((e) => console.log(e));

// SELECT de un usuario con JOIN de la misma persona para darla de alta a través de la confirmación de correo
const newUser = (uid) =>
    pool
      .query ("UPDATE ?? JOIN ?? ON usuarios.idPersona = personas.id SET usuarios.habilitado = ?, personas.habilitado = ? WHERE usuarios.confirmacionCorreo = ?", [T_USUARIOS, T_PERSONAS, true, true, uid])
      .then ((result) => result)
      .catch ((e) => console.log(e));

module.exports = {create, auth, newUser};
