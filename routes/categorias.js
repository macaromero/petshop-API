const express = require("express");
const router = express.Router();
const model = require("./../models/categorias");
const {validate} = require("./../middlewares/categorias");

// GET de todas las categorías
const all = async (req, res) => {
    try {
        const result = await model.get();
        res.json(result);           
    } catch (error) {
        res.status(500).json({message: "¡Ups! Ocurrió un error.", error});
        console.log(error);    
    };
};

// GET de una categoría por id
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

// POST de una categoría
const create = async (req, res) => {
    try {
        const {insertId} = await model.insert(req.body);
        const {nombre} = req.body;
        res.json({message: `La categoría ${nombre} se añadió correctamente en la posición ${insertId}.`});
    } catch (error) {
        res.status(500).json({message: "¡Ups! Ocurrió un error.", error});
        console.log(error); 
    };
};

// PUT de una categoría
const modify = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await model.update(req.body, id);
        res.json({message: `La categoría número ${id} se modificó correctamente.`});
    } catch (error) {
        res.status(500).json({message: "¡Ups! Ocurrió un error.", error});
        console.log(error); 
    };
};

// Borrado de una categoría
const del = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await model.update({habilitado: 0, eliminado: 1}, id);
        res.json({message: `La categoría número ${id} se eliminó correctamente.`});
    } catch (error) {
        res.status(500).json({message: "¡Ups! Ocurrió un error.", error});
        console.log(error); 
    };
}; 

//Rutas
router.get("/", all);
router.get("/:id", single);
router.post("/create", validate, create);
router.put("/modify/:id", validate, modify);
router.get("/delete/:id", del);

module.exports = router;