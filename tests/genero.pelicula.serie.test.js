const request = require('supertest');
const app = require('../app');

//Insertar
describe("POST /genres-ps/create", () => {
    it.skip("Responde 200 si la asociación fue creada", (done) => {
        const data = {
            idPeliculaSerie: 1,
            idGenero: 4
        }
        request(app)
            .post("/genres-ps/create")
            .send(data)
            .set("Accept","application/json")
            .expect(200,done)
    });

    it.skip("Responde 500 si la asociación no fue creada", (done) => {
        const data = {
            idPeliculaSerie: 1,
            idGenero: 1,
           
        }
        request(app)
            .post("/genres-ps/create")
            .send(data)
            .set("Accept","application/json")
            .expect(500,done)
    })
});

//Modificar
describe("PUT /genres-ps/update/:id", () => {
    it.skip("Responde 201 si la asociación fue modificada", (done) => {
        const data = {
           idPeliculaSerie: 2,
           idGenero: 5
          
        }
        request(app)
            .put("/genres-ps/update/2")
            .send(data)
            .set("Accept", "application/json")
            .expect(201,done)
    });

    it.skip("Responde 404 si no se encontró la asociación", (done) => {
        const data = {
           idPeliculaSerie: 2,
           idGenero: 4          
           
        }
        request(app)
            .put("/genres-ps/update/700")
            .send(data)
            .set("Accept", "application/json")
            .expect(404,done)
    });

    it("Responde 500 si hay error de procesamiento", (done) => {
        const data = {
           id_peliculaSerie: 2,
           idGenero: 7       
           
        }
        request(app)
            .put("/genres-ps/update/1")
            .send(data)
            .set("Accept", "application/json")
            .expect(500,done)
    })
});

//Delete
describe("DELETE /genres-ps/delete", () => {
    it.skip("Responde con 200 si fue eliminada la asociación", (done) => {
        const data = {
            id: 11
        }
        request(app)
            .delete("/genres-ps/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(200,done)
    });

    it.skip("Responde con 404 si no existe la asociación", (done) => {
        const data = {
            id: 150
        }
        request(app)
            .delete("/genres-ps/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(404,done)
    });

    it.skip("Responde con 500 si hay un error en el procesamiento", (done) => {
        const data = {
           
        }
        request(app)
            .delete("/genres-ps/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(500,done)
    })
});