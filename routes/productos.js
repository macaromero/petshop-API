const express = require("express");
const router = express.Router();
const model = require("./../models/productos");
const {validateCreate, validateModify} = require("./../middlewares/productos");

// GET de todos los productos
const all = async (req, res) => {
    try {
        const result = await model.get();
        res.json(result);           
    } catch (error) {
        res.status(500).json({message: "¡Ups! Ocurrió un error.", error});
        console.log(error);    
    };
};

// GET de un producto por id
const single = async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await model.getSingle(id);
        res.json(result);        
    } catch (error) {
        res.status(500).json({message: "¡Ups! Ocurrió un error.", error});
        console.log(error); 
    };
};

// POST de un producto
const create = async (req, res) => {
    try {
        const {insertId} = await model.insert(req.body);
        const {nombre} = req.body;
        res.json({message: `El producto ${nombre} se insertó correctamente en la posición ${insertId}.`});
    } catch (error) {
        res.status(500).json({message: "¡Ups! Ocurrió un error.", error});
        console.log(error); 
    };
};

// PUT de un producto
const modify = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await model.update(req.body, id);
        res.json({message: `El producto número ${id} se modificó correctamente.`});
    } catch (error) {
        res.status(500).json({message: "¡Ups! Ocurrió un error.", error});
        console.log(error); 
    };
};

// Borrado de un producto
const del = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await model.update({habilitado: 0, eliminado: 1}, id);
        res.json({message: `El producto número ${id} se eliminó correctamente.`});
    } catch (error) {
        res.status(500).json({message: "¡Ups! Ocurrió un error.", error});
        console.log(error); 
    };
}; 

//Rutas
router.get("/", all);
router.get("/:id", single);
router.post("/create", validateCreate, create);
router.put("/modify/:id", validateModify, modify);
router.get("/delete/:id", del);

module.exports = router;




