const pool = require("./../utils/bd");
const T_PRODUCTOS = "productos";

// SELECT de todos los productos
const get = () => 
    pool
        .query ("SELECT id, nombre, descripcion, imagen, precioUnitario, idCategoria FROM ?? WHERE habilitado = ?", [T_PRODUCTOS, true])
        .then ((response) => response)
        .catch ((e) => e);

// SELECT de un producto por id        
const getSingle = (id = true) => 
    pool
        .query ("SELECT id, nombre, descripcion, imagen, precioUnitario, idCategoria FROM ?? WHERE habilitado = ? AND id = ?", [T_PRODUCTOS, true, id])
        .then ((response) => response)
        .catch ((e) => e);

// INSERT de un nuevo producto
const insert = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_PRODUCTOS, obj])
    .then((response) => response)
    .catch((e) => (e));

// UPDATE de un producto
const update = (obj, id) =>
  pool
    .query("UPDATE ?? SET ? WHERE id = ?", [T_PRODUCTOS, obj, id])
    .then((response) => response)
    .catch((e) => (e));


module.exports = {get, getSingle, insert, update};



