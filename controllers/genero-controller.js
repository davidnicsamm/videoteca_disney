const db = require('../models');

//Consultar
//Listar todos los géneros
exports.read = async (req, res) => {

        const generos = await db.Genero.findAll({
            attributes: { exclude: ['id','createdAt', 'updatedAt']},
        }).then(generos => {
            if(generos){
                res.status(200).json({generos})
            }else{
                res.status(404).json({Mensaje: "No hay géneros cargados"})
            }            
        }).catch(error => {
            res.status(500).json({Error: "Error al obtener el listado"})
        })
}

//Buscar un género por su nombre
exports.readByName = async (req, res ) => {
    const nombre = req.query.name;
   
    const genero = await db.Genero.findOne({
        where: {nombre},
        attributes: { exclude : ['id', 'createdAt', 'updatedAt']}
    }).then(genero => {
        if(genero){
            res.status(200).json({genero})
        }else{
            res.status(404).json({Mensaje: "No existe este género"})
        }
    }).catch(error => {
        res.status(500).json({Error: "Error al realizar la consulta"})
    })
   
}

//Insertar
exports.create = async (req, res) => {
    const fecha = new Date();
    const { nombre, imagen } = await req.body;
    const genero = await db.Genero.create({
        nombre: nombre,
        imagen: imagen,
        createdAt: fecha,
        updatedAt: fecha
    }).then(genero => {
        res.status(201).json({genero})
    }).catch(error => {
        res.status(500).json({Error: "No se pudo insertar el género"});
    })
}

exports.update = async ( req,res ) => {
    const id = parseInt(req.params.id,10);
    const { nombre, imagen } = await req.body;
    await db.Genero.update(
        {
            nombre: nombre,
            imagen: imagen,
            
        },
        { where: {id: id}}
    ).then(result => {
        if(result == 0){
            res.status(404).json({Error: "Género no encontrado"})
        }else{
            res.status(201).json({Mensaje: "Género actualizado"})        
        }
    }).catch(err => {        
        res.status(500).json({Error: "Error en el procesamiento"})
    })
    
}




//Eliminar
exports.delete = async (req,res) => {
    const id = req.body.id;

    db.Genero.destroy({
        where: { id: id}
    }).then(count => {
        if(!count){
            res.status(404).json({Error: "El género buscado no existe en la BBDD"})
        }else{
            res.status(200).json({Mensaje: "Género eliminado"});
        }
    }).catch(error => {
        res.status(500).json({Error: "Error al querer eliminar el género"})
    })
}


