const db = require('../models');

//Insertar
exports.create = async (req,res) => {
    const { idPeliculaSerie, idPersonaje} = await req.body;
    const fecha = new Date();

    await db.Participa.create({
        id_pelicula_serie: idPeliculaSerie,
        id_personaje: idPersonaje,
        createdAt: fecha,
        updatedAt: fecha
    }).then(respuesta => {
        res.status(200).json({Mensaje: "Participación agregada"})
    }).catch(err => {        
        res.status(500).json({Error: "Error al vincular el personaje con la movie"})
    });
}

//Modificar
exports.update = async(req,res) => {
    const id = parseInt(req.params.id,10);
    const { id_pelicula_serie, id_personaje} = await req.body

   
    await db.Participa.update(
        {
            id_pelicula_serie: id_pelicula_serie,
            id_personaje:  id_personaje,
        },
        {where: {id: id}}
    ).then(result => {
        if(result == 0){
            res.status(404).json({Error: "Participación no encontrada"})
        }else{
            res.status(201).json({Mensaje: "Participación actualizada"})        
        }
    }).catch(err => {        
        res.status(500).json({Error: "Error al tratar de modificar la participación"})
    })
}

//Eliminar
exports.delete = async(req,res) => {
    const  { id } = await req.body;

    await db.Participa.destroy({
        where: { id: id }
    }).then(count => {
        if(!count) {
            return res.status(404).json({Error: "No se encontró la participación"})
        }
        res.status(200).json({Mensaje: "Participación eliminada"})
    }).catch(error => {
        res.status(500).json({Error: "Error al eliminar la participación"})
    })
}
