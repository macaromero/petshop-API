const pool = require("./../utils/bd");
const T_CATEGORIAS = "categorias";

// SELECT de todas las categorías
const get = () => 
    pool
        .query ("SELECT id, nombre FROM ?? WHERE habilitado = ?", [T_CATEGORIAS, true])
        .then ((response) => response)
        .catch ((e) => console.log(e));

// SELECT de una categoría por id        
const getSingle = (id = true) => 
    pool
        .query ("SELECT id, nombre FROM ?? WHERE habilitado = ? AND id = ?", [T_CATEGORIAS, true, id])
        .then ((response) => response)
        .catch ((e) => console.log(e));

// INSERT de una nueva categoría
const insert = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_CATEGORIAS, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

// UPDATE de un categoría
const update = (obj, id) =>
  pool
    .query("UPDATE ?? SET ? WHERE id = ?", [T_CATEGORIAS, obj, id])
    .then((response) => response)
    .catch((e) => console.log(e));


module.exports = {get, getSingle, insert, update};
