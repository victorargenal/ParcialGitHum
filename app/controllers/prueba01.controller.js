const db = require("../models");
const Prueba01 = db.prueba01;
const Op = db.Sequelize.Op;


exports.crearRegistro = (req, res) => {
// se valida si esta vacio el campo
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Contenido vacio, favor rellenarlo"
        });
        return;
    }

    const prueba01 = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        direccion: req.body.direccion, 
        ingreso: req.body.ingreso,
        status: req.body.status
    };

    Prueba01.create(prueba01)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al crear el cliente"
            });
        });
};

exports.encontrarRegistros = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Prueba01.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al encontrar los registros"
            });
        });
};

exports.encontrarUnRegistro = (req, res) => {
    const id = req.params.id;

    Prueba01.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "error al encontrar el registro con el id=" + id
            });
        });
};

exports.actualizarRegistro = (req, res) => {
    const id = req.params.id;

    Prueba01.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Registro Actualizado."
                });
            } else {
                res.send({
                    message: `no se pudo actualizar el registro id=${id}. tal vez el registro no existe, o existe un valor nulo`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "error al actualizar el registro id=" + id
            });
        });
};

exports.eliminar = (req, res) => {
    const id = req.params.id;
    Prueba01.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Registro eliminado"
                });
            } else {
                res.send({
                    message: `no se pudo eliminar el registro id=${id}. El registro no fue encontado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};

exports.EliminarTodo = (req, res) => {
    Prueba01.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} registros eliminados` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "erro al eliminar todos los registros"
            });
        });
};

exports.buscarActivos = (req, res) => {
    Prueba01.findAll({ where: { status: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al encontrar los registros activos"
            });
        }); 
};