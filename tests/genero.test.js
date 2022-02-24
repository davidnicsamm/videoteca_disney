const request = require('supertest');
const app = require('../app');

//Insertar
describe("POST /genres/create", () => {
    it.skip("Responde 200 si fue creada la película/serie", (done) => {
        const data = {
            nombre: "Policial",
            imagen: "",
                      
            createdAt: new Date(),
            updatedAt: new Date()           

        }
        request(app)
            .post("/genres/create")
            .send(data)
            .set("Accept","application/json","")
            .expect(200,done)

    });

    it.skip("Responde 500 si no fue creada el la película/serie", (done) => {
        const data = {
            nombre: "Policial",
            imagen: "",
            
            createdAt: new Date(),
            updatedAt: new Date()           

        }
        request(app)
            .post("/genres/create")
            .send(data)
            .set("Accept","application/json","")
            .expect(500,done)
    });
});

//Modificar
describe("PUT /genres/update/:id", () => {
    it.skip("Responde 201 si el género fue modificado", (done) => {
        const data = {
            nombre: "Policial",            
            imagen: "https://www.xn--lamaana-7za.uy/wp-content/uploads/2021/02/genero-policial-750x450.jpg",
              
          
        }
        request(app)
            .put("/genres/update/17")
            .send(data)
            .set("Accept", "application/json")
            .expect(201,done)
    });

    it.skip("Responde 404 si no se encontro el género", (done) => {
        const data = {
            nombre: "Policial",
            imagen: "https://www.xn--lamaana-7za.uy/wp-content/uploads/2021/02/genero-policial-750x450.jpg",
           
        }
        request(app)
            .put("/genres/update/700")
            .send(data)
            .set("Accept", "application/json")
            .expect(404,done)
    })

});

//Delete
describe("DELETE /genres/delete", () => {
    it.skip("Responde con 200 si fue eliminado", (done) => {
        const data = {
            id: 7
        }
        request(app)
            .delete("/genres/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(200,done)
    });

    it.skip("Responde con 404 si no existe en la BBDD", (done) => {
        const data = {
            id: 150
        }
        request(app)
            .delete("/genres/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(404,done)
    });

    it.skip("Responde con 500 si hay un error en el procesamiento", (done) => {
        const data = {
           
        }
        request(app)
            .delete("/genres/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(500,done)
    })
});

//Consultas
describe("GET /genres/list", () => {
    it.skip("Devuelve un JSON conteniendo todos los géneros guardados", (done) => {
        request(app)
            .get("/genres/list/")
            .set("Accept", "application/json")
            .expect(200,done)

    });

    it.skip("Si no hay géneros cargados", (done) => {
        request(app)
            .get("/genres/list/")
            .set("Accept", "application/json")
            .expect(204,done)

    });

    it.skip("Error al obtener el listado", (done) => {
        request(app)
            .get("/genres/li")
            .set("Accept", "application/json")
            .expect(404,done)
    })
});

describe("GET /genres/readByName", () => {
   it.skip("Responde con un json con el género buscado", (done) => {
        request(app)
            .get("/genres/readByName/")
            .query({name: "Drama"})
            .set("Accept", "application/json")
            .expect(200,done)
    });

   it.skip("Responde con un json con el género buscado", (done) => {
        request(app)
            .get("/genres/readByName/")
            .query({name: "Acc"})
            .set("Accept", "application/json")
            .expect(404, done)
    
   });

   it.skip("Responde con un json con el género buscado", (done) => {
        request(app)
            .get("/genres/readByName/")
            .query({nam: "Acción"})
            .set("Accept", "application/json")
            .expect(500, done)
    
   })
});
