const db = require('../models');

//Consultar
exports.read = async (req, res) => {
  
    await db.Personaje.findAll({
        attributes: { exclude: ['id', 'historia', 'peso', 'edad','createdAt', 'updatedAt']},
    }).then(personaje => {
        if (personaje) {
            res.status(200).json({personaje})
        } else {
            res.status(204).json({Error :"No hay personajes cargados"})
        }        
    }).catch(error => {
        res.status(404).json({Error: "Error al obtener el listado"})
    })
}


//Buscar un personaje por su nombre
exports.readByName = async (req, res) =>{
    const nombre = req.query.name;
    
    const personaje = await db.Personaje.findOne({
        where: {nombre},
        attributes: { exclude: ['id', 'createdAt', 'updatedAt']},
        include: [{
            model: db.PeliculaSerie,
            as: 'participaciones',
            attributes: { exclude: ['id','createdAt', 'updatedAt'] },
            through: { attributes: [] },
        }]
    }).then(personaje => {
        if (personaje) {
            res.status(200).json({personaje})
        } else {
            res.status(404).json({Error :"El personaje buscado no existe en la BBDD"})
        }
    }).catch(error => {
        res.status(500).json({Error: "Error al buscar el personaje"})
    })
}

//Buscar personajes por edad
exports.readByAge = async (req, res) =>{
    const edad = parseInt(req.query.age);
   
    await db.Personaje.findAll({
        where: {edad},
        attributes: { 
            exclude: ['id', 'createdAt', 'updatedAt']
        },
        include: [{
            model: db.PeliculaSerie,
            as: 'participaciones',
            attributes: { exclude: ['id','createdAt', 'updatedAt'] },
            through: { attributes: [] },
        }]
    }).then(personajes => {
        if(personajes.length > 0) {
            res.status(200).json({personajes})
        }else {
            res.status(404).json({Error :"No hay personajes en con esta edad"})
        } 
    }).catch(error => {
        res.status(500).json({Error: "Error al obtener el listado"})
    })
}

//Buscar personajes por peso
exports.readByPeso = async (req, res) => {
    const peso = parseInt(req.query.peso);
    
    const personajes = await db.Personaje.findAll({
        where: {peso},
        attributes: { exclude: ['id', 'createdAt', 'updatedAt']},
        include: [{
            model: db.PeliculaSerie,
            as: 'participaciones',
            attributes: { exclude: ['id','createdAt', 'updatedAt'] },
            through: { attributes: [] },
        }]
    }).then(personajes => {
        if(personajes.length > 0) {
            res.status(200).json({personajes})
        }else {
            res.status(404).json({Error :"No hay personajes en con este peso"})
        } 
    }).catch(error => {
        res.status(500).json({Error: "Error al obtener el listado"})
    })
}

//Listar los personajes de una película-serie
exports.readByMovie = async (req,res) => {
    const id = parseInt(req.query.idMovie,10);
    try{
        const personajes = await db.Personaje.findAll({
            attributes: { exclude: ['id', 'createdAt', 'updatedAt']},
            include: [{
                where: {id},
                model: db.PeliculaSerie,
                as: 'participaciones',
                attributes: { exclude: ['id', 'createdAt', 'updatedAt']},
                through: { attributes: []},
            }]
        })
        res.status(200).json({personajes})
        
    }catch(error){
        res.status(500).json({Error: "Error al obtener el listado"})
    }
}



//Insertar
exports.create = async (req,res) => {
   
    const fecha = new Date();
    const {nombre, imagen,edad,peso,historia} = await req.body;
    await db.Personaje.create({
        nombre: nombre,
        imagen: imagen,
        edad: edad,
        peso: peso,
        historia: historia,
        createdAt:fecha,
        updatedAt:fecha
    }).then(respuesta => {
        res.status(200).json({Mensaje: "Personaje creado"})
    }).catch(err => {        
        res.status(500).json({Error: "Error al guardar el personaje"})
    });
}

//Modificar
exports.update = async (req,res) => {
    
    const id = parseInt(req.params.id,10);
    const {nombre, imagen,edad,peso,historia} = await req.body;
    await db.Personaje.update(
        {
            nombre: nombre,
            imagen: imagen,
            edad: edad,
            peso: peso,
            historia: historia
        },
        {where: { id: id }}
    ).then(result => {
        if(result == 0){
            res.status(404).json({Error: "Personaje no encontrado"})
        }else{
            res.status(200).json({Mensaje: "Personaje modificado"})
        }
    }).catch(err => {
        
        res.status(500).json({Error: "Error al tratar de modificar el personaje"})
    })
}

//Eliminar
exports.delete = async (req, res) => {
    const id = await req.body.id;

    db.Personaje.destroy({
        where: { id: id }
    }).then(count => {
        if (!count) {
            return res.status(404).json({Error: 'No se encontro el personaje'});
        }
        res.status(200).send();
    }).catch(error => { 
        res.status(500).json({Error: "Error al eliminar el personaje"})
    }); 
}
