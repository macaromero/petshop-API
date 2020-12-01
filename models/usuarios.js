const pool = require("../utils/bd");
const T_USUARIOS = "usuarios";

// INSERT de un nuevo usuario        
const create = ({usuario, password, idPersona, confirmacionCorreo}) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_USUARIOS, {usuario, password, idPersona, confirmacionCorreo}])
    .then((result) => result)
    .catch((e) => console.log(e));

// SELECT de un usuario para realizar el login
const auth = (usuario, password) => 
    pool
        .query ("SELECT id, usuario FROM ?? WHERE usuario = ? AND password = ?", [T_USUARIOS, usuario, password])
        .then ((response) => response)
        .catch ((e) => console.log(e));

module.exports = {create, auth};
