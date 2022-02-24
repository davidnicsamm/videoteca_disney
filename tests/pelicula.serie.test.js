const request = require('supertest');
const app = require('../app');

//Insertar
describe("POST /movies/create", () => {
    it.skip("Responde 200 si fue creada la película/serie", (done) => {
        const data = {
            titulo: "El Rey León",
            imagen: "https://static.wikia.nocookie.net/disney/i{generos/1/1a/Lion_king_ver5_xlg.jpg/revision/latest?cb=20160923051934&path-prefix=es",
            fecha_creacion: "1994-01-01",            
            createdAt: new Date(),
            updatedAt: new Date()           

        }
        request(app)
            .post("/movies/create")
            .send(data)
            .set("Accept","application/json","")
            .expect(200,done)

    });

    it.skip("Responde 500 si no fue creada el la película/serie", (done) => {
        const data = {
            titulo: "El Rey León",
            imagen: "https://static.wikia.nocookie.net/disney/i{generos/1/1a/Lion_king_ver5_xlg.jpg/revision/latest?cb=20160923051934&path-prefix=es",
            fecha_creacion: 1994,
            
            createdAt: new Date(),
            updatedAt: new Date()           

        }
        request(app)
            .post("/movies/create")
            .send(data)
            .set("Accept","application/json","")
            .expect(500,done)
    });
});

//Modificar
describe("PUT /movies/update/:id", () => {
    it.skip("Responde 201 si el personaje fue modificado", (done) => {
        const data = {
            titulo: "El Rey León",
            imagen: "https://static.wikia.nocookie.net/disney/i{generos/1/1a/Lion_king_ver5_xlg.jpg/revision/latest?cb=20160923051934&path-prefix=es",
            fecha_creacion: "1994-01-01",    
          
        }
        request(app)
            .put("/movies/update/14")
            .send(data)
            .set("Accept", "application/json")
            .expect(201,done)
    });
    it.skip("Responde 404 si no se encontro el personaje", (done) => {
        const data = {
            titulo: "El Rey León",
            imagen: "https://static.wikia.nocookie.net/disney/i{generos/1/1a/Lion_king_ver5_xlg.jpg/revision/latest?cb=20160923051934&path-prefix=es",
            fecha_creacion: "1994-01-01",    
           
        }
        request(app)
            .put("/movies/update/140")
            .send(data)
            .set("Accept", "application/json")
            .expect(404,done)
    });

    it.skip("Responde 500 si no se puede llevar a cabo la modificación", (done) => {
        const data = {
            titulo: "El Rey León",
            imagen: "https://static.wikia.nocookie.net/disney/i{generos/1/1a/Lion_king_ver5_xlg.jpg/revision/latest?cb=20160923051934&path-prefix=es",
            fecha_creacion: "ggdgdgdgdgd",    
            
        }
        request(app)
            .put("/movies/update/14")
            .send(data)
            .set("Accept", "application/json")
            .expect(500,done)
    });
});

//Delete
describe("DELETE /movies/delete", () => {
    it.skip("Responde con 200 si fue eliminada", (done) => {
        const data = {
            id: 14
        }
        request(app)
            .delete("/movies/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(200,done)
    });

    it.skip("Responde con 404 si no existe en la BBDD", (done) => {
        const data = {
            id: 15
        }
        request(app)
            .delete("/movies/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(404,done)
    });

    it.skip("Responde con 500 si hay un error en el procesamiento", (done) => {
        const data = {
           
        }
        request(app)
            .delete("/movies/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(500,done)
    })
});

//Consultas
describe("GET /movies/list", () => {
    it.skip("Devuelve un JSON conteniendo todos las película-serie guardados", (done) => {
        request(app)
            .get("/movies/list/")
            .set("Accept", "application/json")
            .expect(200,done)

    });

    it.skip("Si no hay película-serie cargados", (done) => {
        request(app)
            .get("/movies/list/")
            .set("Accept", "application/json")
            .expect(204,done)

    });

    it("Error al obtener el listado", (done) => {
        request(app)
            .get("/movies/li")
            .set("Accept", "application/json")
            .expect(404,done)
    })
});

describe("GET /movies/readByTitle", () => {
   it.skip("Responde con un json con la película-serie buscada", (done) => {
        request(app)
            .get("/movies/readByTitle/")
            .query({title: "Pinocho"})
            .set("Accept", "application/json")
            .expect(200, done)
    
   });

   it.skip("Responde con un json con la película-serie buscada", (done) => {
        request(app)
            .get("/movies/readByTitle/")
            .query({title: "Pin"})
            .set("Accept", "application/json")
            .expect(404, done)
    
   });

   it.skip("Responde con un json con la película-serie buscada", (done) => {
        request(app)
            .get("/movies/readByTitle/")
            .query({ti: "Pinocho"})
            .set("Accept", "application/json")
            .expect(500, done)
    
   })
});

describe("GET /movies/readByGenre", () => {
    it.skip("Responde con un JSON conteniendo las pelicula-serie de ese género", (done) => {
        request(app)
            .get("/movies/readByGenre?idGenero=1")
            .set("Accept", "application/json")
            .expect(200, done)
    });

    it.skip("Responde con un JSON si no hay pelicula-serie para ese género", (done) => {
        request(app)
            .get("/movies/readByGenre?idGenero=1000")
            .set("Accept", "application/json")
            .expect(404, done)
    });

    it.skip("Responde con 500 si hay error en la búsqueda", (done) => {
        request(app)
            .get("/movies/readByGenre?idGeno=1000")
            .set("Accept", "application/json")
            .expect(500, done)
    });
});

describe("GET /movies/readByOrder", () => {
    it("Responde con un JSON conteniendo las pelicula-serie de ese género", (done) => {
        request(app)
            .get("/movies/readByOrder?order=ASC")
            .set("Accept", "application/json")
            .expect(200, done)
    });

    it("Responde con un JSON si no hay pelicula-serie para ese género", (done) => {
        request(app)
            .get("/movies/readByOr?order=ASC")
            .set("Accept", "application/json")
            .expect(404, done)
    });

    it("Responde con 500 si hay error en la búsqueda", (done) => {
        request(app)
            .get("/movies/rea")
            .set("Accept", "application/json")
            .expect(404, done)
    });
});