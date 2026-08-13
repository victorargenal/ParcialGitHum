module.exports = app => {
    const prueba01 = require("../controllers/prueba01.controller.js");
    var router = require("express").Router();

    router.post("/create/", prueba01.crearRegistro);

    router.get("/", prueba01.encontrarRegistros);

    router.get("/status", prueba01.buscarActivos);

    router.get("/:id", prueba01.encontrarUnRegistro);

    router.put("/update/:id", prueba01.actualizarRegistro);

    router.delete("/delete/:id", prueba01.eliminar);

    router.delete("/delete/", prueba01.EliminarTodo);

    app.use("/api/prueba01", router);
};