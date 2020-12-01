const pool = require("../utils/bd");
const T_PERSONAS = "personas";

// INSERT de una nueva persona
const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_PERSONAS, obj])
    .then((result) => result)
    .catch((e) => console.log(e));

module.exports = {create};