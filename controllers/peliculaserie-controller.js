const db = require('../models');

//Consultar
exports.read = async (req, res) => {
   
    await db.PeliculaSerie.findAll({
        attributes: { exclude: ['id', 'fecha_creacion', 'calificacion', 'createdAt', 'updatedAt']}        
    }).then(resultado => {
        if (resultado.length != 0) {
            res.status(200).json({resultado})
        } else {
            res.status(204).json({Error :"No hay peliculas/series cargadas"})
        }        
    }).catch(error => {
        res.status(500).json({Error: "Error al obtener el listado"})
    })
    
   
}

//Buscar por título
exports.readByTitle = async (req, res) => {
    const titulo = req.query.title;
   
        await db.PeliculaSerie.findOne({
            where: {titulo},
            attributes: { exclude: ['id', 'createdAt', 'updatedAt']},
            include: [
                        {
                            model: db.Personaje,
                            as: 'participaciones',
                            attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'edad','peso','historia']},
                            through: { attributes: []},
                        },
                        {
                            model: db.Genero,
                            as: 'generos',
                            attributes: { exclude: ['id', 'createdAt', 'updatedAt']},
                            through: { attributes: []},
                        }
            ]
        }).then(resultado => {
        if (resultado) {
            res.status(200).json({resultado})
        } else {
            res.status(404).json({Error :"El resultado buscado no existe en la BBDD"})
        }
    }).catch(error => {
        res.status(500).json({Error: "Error al buscar el resultado"})
    })
}

//Buscar por género
exports.readByGenre = async (req, res) => {
    const id = parseInt(req.query.idGenero);
    
    await db.PeliculaSerie.findAll({           
        attributes: { exclude: ['id', 'createdAt', 'updatedAt']},
        include: [
            {
                model: db.Personaje,
                as: 'participaciones',
                attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'edad','peso','historia']},
                through: { attributes: []},
            },
            {
                where: {id},
                model: db.Genero,
                as: 'generos',
                attributes: { exclude: ['id', 'createdAt', 'updatedAt']},
                through: { attributes: []},
            }
        ],
    }).then(resultado => {
        if (resultado.length != 0) {
            res.status(200).json({resultado})
        } else {
            res.status(404).json({Error :" No hay peliculas/series para este género"})
        }
    }).catch(error => {
        res.status(500).json({Error: "Error al obtener el listado"})
    })
}

//Lista ordenada
exports.readByOrder = async (req,res) => {
    const order = req.query.order.toUpperCase();
   
    await db.PeliculaSerie.findAll({
        attributes: { exclude: ['id', 'createdAt', 'updatedAt']},
        include: [
            {
                model: db.Personaje,
                as: 'participaciones',
                attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'edad','peso','historia']},
                through: { attributes: []},
            }                             
        ],
        order: [[ 'titulo', order ] ]
    }).then(resultado => {
        if (resultado.length != 0) {
            res.status(200).json({resultado})
        } else {
            res.status(404).json({Error :"No hay peliculas/series en la BBDD"})
        }
    }).catch(error => {
        res.status(500).json({Error: "Error obtener el listado"})
    })
    
}

//Insertar
exports.create = async (req,res) => {
   
        const fecha = new Date();
        const { titulo, imagen, fecha_creacion, calificacion } = await req.body;
        await db.PeliculaSerie.create(
            {titulo: titulo,
            imagen: imagen,
            fecha_creacion: fecha_creacion,
            calificacion: calificacion,
            createdAt:fecha,
            updatedAt:fecha}
        ).then(respuesta => {
            res.status(200).json({Mensaje: "Pelicula/serie creada"})
        }).catch(err => {        
            res.status(500).json({Error: "Error al guardar la película/serie"})
        });
}

//Modificar
exports.update = async ( req,res ) => {
    const id = parseInt(req.params.id,10);
    const { titulo, imagen, fecha_creacion, calificacion} = await req.body;
    await db.PeliculaSerie.update(
        {
            titulo: titulo,
            imagen: imagen,
            fecha_creacion: fecha_creacion,
            calificacion: calificacion
        },
        { where: {id: id}}
    ).then(result => {
        if(result == 0){
            res.status(404).json({Error: "Película/Serie no encontrada"})
        }else{
            res.status(201).json({Mensaje: "Película/Serie actualizada"})        
        }
    }).catch(err => {        
        res.status(500).json({Error: "Error al tratar de modificar la Película/Serie"})
    })
    
}

//Eliminar
exports.delete = async (req, res) => {
    const  { id } = await req.body;

    db.PeliculaSerie.destroy({
        where: { id: id }
    }).then(count => {
        if (!count) {
            return res.status(404).json({Error: "No se encontro la película o serie"})
        }
        res.status(200).json({Mensaje: "Película o Serie eliminada"})
    }).catch(error => {
            res.status(500).json({Error: "Error al eliminar la pelicula o serie"})
    });
}



