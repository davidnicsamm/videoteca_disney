const request = require('supertest');
const app = require('../app');

//Insertar
describe("POST /participates/create", () => {
    it.skip("Responde 200 si la participación fue creada", (done) => {
        const data = {
            idPeliculaSerie: 2,
            idPersonaje: 11
        }
        request(app)
            .post("/participates/create")
            .send(data)
            .set("Accept","application/json")
            .expect(200,done)
    });

    it.skip("Responde 500 si la participación no fue creada", (done) => {
        const data = {
            idPeliculaSerie: 1,
            idPersonaje: 1,
           
        }
        request(app)
            .post("/participates/create")
            .send(data)
            .set("Accept","application/json")
            .expect(500,done)
    })
});

//Modificar
describe("PUT /participates/update/:id", () => {
    it.skip("Responde 201 si la participación fue modificada", (done) => {
        const data = {
           id_pelicula_serie: 7,
           id_personaje: 1
          
        }
        request(app)
            .put("/participates/update/7")
            .send(data)
            .set("Accept", "application/json")
            .expect(201,done)
    });

    it.skip("Responde 404 si no se encontró la participación", (done) => {
        const data = {
           id_pelicula_serie: 7,
           id_personaje: 1            
           
        }
        request(app)
            .put("/participates/update/700")
            .send(data)
            .set("Accept", "application/json")
            .expect(404,done)
    })
});

//Delete
describe("DELETE /participates/delete", () => {
    it("Responde con 200 si fue eliminada la participación", (done) => {
        const data = {
            id: 15
        }
        request(app)
            .delete("/participates/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(200,done)
    });

    it("Responde con 404 si no existe la participación", (done) => {
        const data = {
            id: 150
        }
        request(app)
            .delete("/participates/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(404,done)
    });

    it("Responde con 500 si hay un error en el procesamiento", (done) => {
        const data = {
           
        }
        request(app)
            .delete("/participates/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(500,done)
    })
});