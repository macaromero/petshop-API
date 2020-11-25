const express = require("express");
const router = express.Router();
const model = require("./../models/categorias");

// GET de todas las categorías
const all = async (req, res) => {
    try {
        const result = await model.get();
        res.json(result);           
    } catch (error) {
        res.status(500).json({message: "¡Ups! Ocurrió un error.", error});    
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
    };
};

// POST de una categoría
const create = async (req, res) => {
    try {
        const {insertId} = await model.insert(req.body);
        const {nombre} = req.body;
        res.send(`La categoría ${nombre} se añadió correctamente en la posición ${insertId}.`);
    } catch (error) {
        res.status(500).json({message: "¡Ups! Ocurrió un error.", error});
    };
};

// PUT de una categoría
const modify = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await model.update(req.body, id);
        const {nombre} = req.body;
        res.send(`La categoría número ${id} se modificó correctamente, ahora se llama ${nombre}.`);
    } catch (error) {
        res.status(500).json({message: "¡Ups! Ocurrió un error.", error});
    };
};

// Borrado de una categoría
const del = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await model.update({habilitado: 0, eliminado: 1}, id);
        res.send(`La categoría número ${id} se eliminó correctamente.`);
    } catch (error) {
        res.status(500).json({message: "¡Ups! Ocurrió un error.", error});
    };
}; 


router.get("/", all);
router.get("/:id", single);
router.post("/create", create);
router.put("/modify/:id", modify);
router.put("/delete/:id", del);
module.exports = router;