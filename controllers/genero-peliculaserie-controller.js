const db = require('../models');

//Insertar

exports.create = async (req, res) => {
    const { idPeliculaSerie, idGenero } = await req.body;
    const fecha = new  Date();

    await db.GeneroPeliculaSerie.create({
        id_pelicula_serie: idPeliculaSerie,
        id_genero: idGenero,
        createdAt: fecha,
        updatedAt: fecha
    }).then( respuesta => {
        res.status(200).json({Mensaje: "Asociación agregada"})
    }).catch(err => {
        res.status(500).json({Error: "Error al intentar agregar la asociación"})
    })
}

//Modificar
exports.update = async (req, res) => {
    const id = parseInt(req.params.id);
    const { idPeliculaSerie, idGenero } = await req.body;

    await db.GeneroPeliculaSerie.update(
        {
            id_pelicula_serie: idPeliculaSerie,
            id_genero: idGenero
        },
        {where: {id: id}}
    ).then(respuesta => {
        if(respuesta == 0){
            res.status(404).json({Error: "Asociación no encontrada"})
        }else{
            res.status(201).json({respuesta})
        }
    }).catch( err => {
        res.status(500).json({Error: "Error al tratar de modificar la asociación"})
    })
}

//Eliminar
exports.delete = async (req, res) => {
    const { id } = req.body;

    await db.GeneroPeliculaSerie.destroy({
        where: { id: id}
    }).then(respuesta => {
        if(!respuesta){
            res.status(404).json({Error: "No se encontró la asociación"})
        }else{
            res.status(200).json({Mensaje: "Asociación eliminada"})
        }
    }).catch(error => {
        res.status(500).json({Error: "Error al intentar eliminar la asociación"})
    })
}