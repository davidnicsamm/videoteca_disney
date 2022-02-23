const request = require('supertest');
const app = require('../app');

//Insertar
describe("POST /characters/create", () => {
    it.skip("Responde 200 si fue creado el personaje", (done) => {
        const data = {
            nombre: "Simba",
            imagen: "https://static.wikia.nocookie.net/disney/images/9/95/Simba.png/revision/latest?cb=20121008182056&path-prefix=es",
            edad: 28,
            peso: 200,
            historia: `Como cachorro, Simba era bastante masculino, divertido, aventurero e impresionable. Admiraba mucho a su padre, Mufasa, y deseaba algún día convertirse en un gobernante tan poderoso como él, pasando gran parte de su tiempo aprendiendo los caminos de un rey o simplemente imaginando cómo sería la vida con tal poder y estima. Esto inflado su ego, haciéndolo arrogante y jactancioso hacia personajes como Zazu y Scar, y además llevó a situaciones problemáticas, ya que su punto de vista sobre Mufasa le llevó a creer que ser un rey significaba ser audaz y buscando peligro innecesario, sólo para probar cómo poderoso podría ser. Esto estaría perfectamente en línea con los planes de Scar, quien planeó matar a Simba para aumentar sus posibilidades de convertirse en gobernante de las Tierras del Reino. Sin embargo, Simba fue capaz de aprender de sus errores al final, ya que sus acciones negativas fueron principalmente impulsadas por la admiración de su padre.

                        Como un adulto joven, la personalidad de Simba toma un cambio, llegando a ser melodramático y temeroso - un resultado directo de la muerte de Mufasa. Porque creía que la muerte de su padre era en última instancia su culpa, Simba se sintió indigno de gobernar el trono, insinuando signos de baja autoestima, además de rehusarse a enfrentar su pasado. No fue hasta que se encontró y obtuvo la guía del sabio mandril, Rafiki, que Simba descubriría que el pasado es importante, y debe ser mirado a fin de aprender de los errores, pero nunca como una razón para evitar que uno mismo de seguir adelante en la vida. A pesar de esto, Simba también estaba dispuesto a participar en experiencias más fáciles, como se ve con su amistad con Timón y Pumba. Como se vio durante "Hakuna Matata", y su tiempo como un adolescente visto en The Lion King 1½, Simba conservó algo de su naturaleza infantil cuando simplemente en presencia de sus amigos, y lejos de las presiones de su pasado, ser relajado y amante de la diversión si se le da la oportunidad.

                        Ahora, como un adulto maduro y Rey de las Tierras del Reino, con una familia amorosa, incluyendo a una hija, Simba ya no es demasiado aventurero y extrovertido, en lugar de ser humilde y bastante suave de voz, incluso en la cara de sus amigos más cercanos. Como resultado directo de la muerte trágica de Mufasa, Simba también se convirtió en temeroso y sobre protector, específicamente con su hija, Kiara, ya que temía los peligros que acechaban en las Tierras del Reino, ya fueran las hienas o escondidas en las sombras, Tales como la verdadera naturaleza de Scar. También miró hacia atrás en su infancia con cierto sentido de vergüenza, como lo demuestra su conversación con Nala en The Lion King II: Simba's Pride, en la que afirmaba que el espíritu aventurero de Kiara lo hacía temeroso, reflejando su propia actitud aventurera como un cachorro, refiriéndose a los peligros que sufrió durante la infancia.

                        También se demostró que era un gobernante sabio y respetado, como Mufasa antes que él. Él tenía el prejuicio contra los que retenían lealtad a Scar destronado, pero estaba dispuesto a aceptarlos eventualmente, siguiendo la filosofía verbalmente exhibida en "We Are One". Sin embargo, a pesar de ser rey, Simba sabe que él tiene que respetar las tradiciones de otros animales, que era porqué él no interfirió con el torneo de Makuu y de Pua.

                        Simba también le gusta seguir la tradición, por lo que en un primer momento, se sintió decepcionado con su hijo Kion por poner otros animales en la Guardia del León en lugar de otros leones como las Guardias del León anteriores. Sin embargo, después de presenciar la nueva Guardia del León al derrotar a las hienas, Simba acepta la elección de su hijo y se enorgullece de él.`,
            createdAt: new Date(),
            updatedAt: new Date()           

        }
        request(app)
            .post("/characters/create")
            .send(data)
            .set("Accept","application/json","")
            .expect(200,done)

    });

    it.skip("Responde 500 si no fue creado el personaje", (done) => {
        const data = {
            nombre: "Simba",
            imagen: "https://static.wikia.nocookie.net/disney/images/9/95/Simba.png/revision/latest?cb=20121008182056&path-prefix=es",
            edad: 28,
            peso: 200,
            historia: `Como cachorro, Simba era bastante masculino, divertido, aventurero e impresionable. Admiraba mucho a su padre, Mufasa, y deseaba algún día convertirse en un gobernante tan poderoso como él, pasando gran parte de su tiempo aprendiendo los caminos de un rey o simplemente imaginando cómo sería la vida con tal poder y estima. Esto inflado su ego, haciéndolo arrogante y jactancioso hacia personajes como Zazu y Scar, y además llevó a situaciones problemáticas, ya que su punto de vista sobre Mufasa le llevó a creer que ser un rey significaba ser audaz y buscando peligro innecesario, sólo para probar cómo poderoso podría ser. Esto estaría perfectamente en línea con los planes de Scar, quien planeó matar a Simba para aumentar sus posibilidades de convertirse en gobernante de las Tierras del Reino. Sin embargo, Simba fue capaz de aprender de sus errores al final, ya que sus acciones negativas fueron principalmente impulsadas por la admiración de su padre.

                        Como un adulto joven, la personalidad de Simba toma un cambio, llegando a ser melodramático y temeroso - un resultado directo de la muerte de Mufasa. Porque creía que la muerte de su padre era en última instancia su culpa, Simba se sintió indigno de gobernar el trono, insinuando signos de baja autoestima, además de rehusarse a enfrentar su pasado. No fue hasta que se encontró y obtuvo la guía del sabio mandril, Rafiki, que Simba descubriría que el pasado es importante, y debe ser mirado a fin de aprender de los errores, pero nunca como una razón para evitar que uno mismo de seguir adelante en la vida. A pesar de esto, Simba también estaba dispuesto a participar en experiencias más fáciles, como se ve con su amistad con Timón y Pumba. Como se vio durante "Hakuna Matata", y su tiempo como un adolescente visto en The Lion King 1½, Simba conservó algo de su naturaleza infantil cuando simplemente en presencia de sus amigos, y lejos de las presiones de su pasado, ser relajado y amante de la diversión si se le da la oportunidad.

                        Ahora, como un adulto maduro y Rey de las Tierras del Reino, con una familia amorosa, incluyendo a una hija, Simba ya no es demasiado aventurero y extrovertido, en lugar de ser humilde y bastante suave de voz, incluso en la cara de sus amigos más cercanos. Como resultado directo de la muerte trágica de Mufasa, Simba también se convirtió en temeroso y sobre protector, específicamente con su hija, Kiara, ya que temía los peligros que acechaban en las Tierras del Reino, ya fueran las hienas o escondidas en las sombras, Tales como la verdadera naturaleza de Scar. También miró hacia atrás en su infancia con cierto sentido de vergüenza, como lo demuestra su conversación con Nala en The Lion King II: Simba's Pride, en la que afirmaba que el espíritu aventurero de Kiara lo hacía temeroso, reflejando su propia actitud aventurera como un cachorro, refiriéndose a los peligros que sufrió durante la infancia.

                        También se demostró que era un gobernante sabio y respetado, como Mufasa antes que él. Él tenía el prejuicio contra los que retenían lealtad a Scar destronado, pero estaba dispuesto a aceptarlos eventualmente, siguiendo la filosofía verbalmente exhibida en "We Are One". Sin embargo, a pesar de ser rey, Simba sabe que él tiene que respetar las tradiciones de otros animales, que era porqué él no interfirió con el torneo de Makuu y de Pua.

                        Simba también le gusta seguir la tradición, por lo que en un primer momento, se sintió decepcionado con su hijo Kion por poner otros animales en la Guardia del León en lugar de otros leones como las Guardias del León anteriores. Sin embargo, después de presenciar la nueva Guardia del León al derrotar a las hienas, Simba acepta la elección de su hijo y se enorgullece de él.`,
            createdAt: new Date(),
            updatedAt: new Date()           

        }
        request(app)
            .post("/characters/create")
            .send(data)
            .set("Accept","application/json","")
            .expect(500,done)

    });
})

//Modificar
describe("PUT /characters/update/:id", () => {
    it.skip("Responde 201 si el personaje fue modificado", (done) => {
        const data = {
            nombre: "Simba",
            imagen: "https://static.wikia.nocookie.net/disney/images/9/95/Simba.png/revision/latest?cb=20121008182056&path-prefix=es",
            edad: 30,
            peso: 200,
            historia: `Como cachorro, Simba era bastante masculino, divertido, aventurero e impresionable. Admiraba mucho a su padre, Mufasa, y deseaba algún día convertirse en un gobernante tan poderoso como él, pasando gran parte de su tiempo aprendiendo los caminos de un rey o simplemente imaginando cómo sería la vida con tal poder y estima. Esto inflado su ego, haciéndolo arrogante y jactancioso hacia personajes como Zazu y Scar, y además llevó a situaciones problemáticas, ya que su punto de vista sobre Mufasa le llevó a creer que ser un rey significaba ser audaz y buscando peligro innecesario, sólo para probar cómo poderoso podría ser. Esto estaría perfectamente en línea con los planes de Scar, quien planeó matar a Simba para aumentar sus posibilidades de convertirse en gobernante de las Tierras del Reino. Sin embargo, Simba fue capaz de aprender de sus errores al final, ya que sus acciones negativas fueron principalmente impulsadas por la admiración de su padre.

                        Como un adulto joven, la personalidad de Simba toma un cambio, llegando a ser melodramático y temeroso - un resultado directo de la muerte de Mufasa. Porque creía que la muerte de su padre era en última instancia su culpa, Simba se sintió indigno de gobernar el trono, insinuando signos de baja autoestima, además de rehusarse a enfrentar su pasado. No fue hasta que se encontró y obtuvo la guía del sabio mandril, Rafiki, que Simba descubriría que el pasado es importante, y debe ser mirado a fin de aprender de los errores, pero nunca como una razón para evitar que uno mismo de seguir adelante en la vida. A pesar de esto, Simba también estaba dispuesto a participar en experiencias más fáciles, como se ve con su amistad con Timón y Pumba. Como se vio durante "Hakuna Matata", y su tiempo como un adolescente visto en The Lion King 1½, Simba conservó algo de su naturaleza infantil cuando simplemente en presencia de sus amigos, y lejos de las presiones de su pasado, ser relajado y amante de la diversión si se le da la oportunidad.

                        Ahora, como un adulto maduro y Rey de las Tierras del Reino, con una familia amorosa, incluyendo a una hija, Simba ya no es demasiado aventurero y extrovertido, en lugar de ser humilde y bastante suave de voz, incluso en la cara de sus amigos más cercanos. Como resultado directo de la muerte trágica de Mufasa, Simba también se convirtió en temeroso y sobre protector, específicamente con su hija, Kiara, ya que temía los peligros que acechaban en las Tierras del Reino, ya fueran las hienas o escondidas en las sombras, Tales como la verdadera naturaleza de Scar. También miró hacia atrás en su infancia con cierto sentido de vergüenza, como lo demuestra su conversación con Nala en The Lion King II: Simba's Pride, en la que afirmaba que el espíritu aventurero de Kiara lo hacía temeroso, reflejando su propia actitud aventurera como un cachorro, refiriéndose a los peligros que sufrió durante la infancia.

                        También se demostró que era un gobernante sabio y respetado, como Mufasa antes que él. Él tenía el prejuicio contra los que retenían lealtad a Scar destronado, pero estaba dispuesto a aceptarlos eventualmente, siguiendo la filosofía verbalmente exhibida en "We Are One". Sin embargo, a pesar de ser rey, Simba sabe que él tiene que respetar las tradiciones de otros animales, que era porqué él no interfirió con el torneo de Makuu y de Pua.

                        Simba también le gusta seguir la tradición, por lo que en un primer momento, se sintió decepcionado con su hijo Kion por poner otros animales en la Guardia del León en lugar de otros leones como las Guardias del León anteriores. Sin embargo, después de presenciar la nueva Guardia del León al derrotar a las hienas, Simba acepta la elección de su hijo y se enorgullece de él.`,
            
        }
        request(app)
            .put("/characters/update/140")
            .send(data)
            .set("Accept", "application/json")
            .expect(201,done)
    });
    it.skip("Responde 404 si no se encontro el personaje", (done) => {
        const data = {
            nombre: "Simba",
            imagen: "https://static.wikia.nocookie.net/disney/images/9/95/Simba.png/revision/latest?cb=20121008182056&path-prefix=es",
            edad: 30,
            peso: 200,
            historia: `Como cachorro, Simba era bastante masculino, divertido, aventurero e impresionable. Admiraba mucho a su padre, Mufasa, y deseaba algún día convertirse en un gobernante tan poderoso como él, pasando gran parte de su tiempo aprendiendo los caminos de un rey o simplemente imaginando cómo sería la vida con tal poder y estima. Esto inflado su ego, haciéndolo arrogante y jactancioso hacia personajes como Zazu y Scar, y además llevó a situaciones problemáticas, ya que su punto de vista sobre Mufasa le llevó a creer que ser un rey significaba ser audaz y buscando peligro innecesario, sólo para probar cómo poderoso podría ser. Esto estaría perfectamente en línea con los planes de Scar, quien planeó matar a Simba para aumentar sus posibilidades de convertirse en gobernante de las Tierras del Reino. Sin embargo, Simba fue capaz de aprender de sus errores al final, ya que sus acciones negativas fueron principalmente impulsadas por la admiración de su padre.

                        Como un adulto joven, la personalidad de Simba toma un cambio, llegando a ser melodramático y temeroso - un resultado directo de la muerte de Mufasa. Porque creía que la muerte de su padre era en última instancia su culpa, Simba se sintió indigno de gobernar el trono, insinuando signos de baja autoestima, además de rehusarse a enfrentar su pasado. No fue hasta que se encontró y obtuvo la guía del sabio mandril, Rafiki, que Simba descubriría que el pasado es importante, y debe ser mirado a fin de aprender de los errores, pero nunca como una razón para evitar que uno mismo de seguir adelante en la vida. A pesar de esto, Simba también estaba dispuesto a participar en experiencias más fáciles, como se ve con su amistad con Timón y Pumba. Como se vio durante "Hakuna Matata", y su tiempo como un adolescente visto en The Lion King 1½, Simba conservó algo de su naturaleza infantil cuando simplemente en presencia de sus amigos, y lejos de las presiones de su pasado, ser relajado y amante de la diversión si se le da la oportunidad.

                        Ahora, como un adulto maduro y Rey de las Tierras del Reino, con una familia amorosa, incluyendo a una hija, Simba ya no es demasiado aventurero y extrovertido, en lugar de ser humilde y bastante suave de voz, incluso en la cara de sus amigos más cercanos. Como resultado directo de la muerte trágica de Mufasa, Simba también se convirtió en temeroso y sobre protector, específicamente con su hija, Kiara, ya que temía los peligros que acechaban en las Tierras del Reino, ya fueran las hienas o escondidas en las sombras, Tales como la verdadera naturaleza de Scar. También miró hacia atrás en su infancia con cierto sentido de vergüenza, como lo demuestra su conversación con Nala en The Lion King II: Simba's Pride, en la que afirmaba que el espíritu aventurero de Kiara lo hacía temeroso, reflejando su propia actitud aventurera como un cachorro, refiriéndose a los peligros que sufrió durante la infancia.

                        También se demostró que era un gobernante sabio y respetado, como Mufasa antes que él. Él tenía el prejuicio contra los que retenían lealtad a Scar destronado, pero estaba dispuesto a aceptarlos eventualmente, siguiendo la filosofía verbalmente exhibida en "We Are One". Sin embargo, a pesar de ser rey, Simba sabe que él tiene que respetar las tradiciones de otros animales, que era porqué él no interfirió con el torneo de Makuu y de Pua.

                        Simba también le gusta seguir la tradición, por lo que en un primer momento, se sintió decepcionado con su hijo Kion por poner otros animales en la Guardia del León en lugar de otros leones como las Guardias del León anteriores. Sin embargo, después de presenciar la nueva Guardia del León al derrotar a las hienas, Simba acepta la elección de su hijo y se enorgullece de él.`,
            
        }
        request(app)
            .put("/characters/update/140")
            .send(data)
            .set("Accept", "application/json")
            .expect(404,done)
    });

    it.skip("Responde 500 si no se puede llevar a cabo la modificación", (done) => {
        const data = {
            nombre: "Simba",
            imagen: "https://static.wikia.nocookie.net/disney/images/9/95/Simba.png/revision/latest?cb=20121008182056&path-prefix=es",
            edad: 70,
            peso: "fdfhdhhdfhfdh",
            historia: `Como cachorro, Simba era bastante masculino, divertido, aventurero e impresionable. Admiraba mucho a su padre, Mufasa, y deseaba algún día convertirse en un gobernante tan poderoso como él, pasando gran parte de su tiempo aprendiendo los caminos de un rey o simplemente imaginando cómo sería la vida con tal poder y estima. Esto inflado su ego, haciéndolo arrogante y jactancioso hacia personajes como Zazu y Scar, y además llevó a situaciones problemáticas, ya que su punto de vista sobre Mufasa le llevó a creer que ser un rey significaba ser audaz y buscando peligro innecesario, sólo para probar cómo poderoso podría ser. Esto estaría perfectamente en línea con los planes de Scar, quien planeó matar a Simba para aumentar sus posibilidades de convertirse en gobernante de las Tierras del Reino. Sin embargo, Simba fue capaz de aprender de sus errores al final, ya que sus acciones negativas fueron principalmente impulsadas por la admiración de su padre.

                        Como un adulto joven, la personalidad de Simba toma un cambio, llegando a ser melodramático y temeroso - un resultado directo de la muerte de Mufasa. Porque creía que la muerte de su padre era en última instancia su culpa, Simba se sintió indigno de gobernar el trono, insinuando signos de baja autoestima, además de rehusarse a enfrentar su pasado. No fue hasta que se encontró y obtuvo la guía del sabio mandril, Rafiki, que Simba descubriría que el pasado es importante, y debe ser mirado a fin de aprender de los errores, pero nunca como una razón para evitar que uno mismo de seguir adelante en la vida. A pesar de esto, Simba también estaba dispuesto a participar en experiencias más fáciles, como se ve con su amistad con Timón y Pumba. Como se vio durante "Hakuna Matata", y su tiempo como un adolescente visto en The Lion King 1½, Simba conservó algo de su naturaleza infantil cuando simplemente en presencia de sus amigos, y lejos de las presiones de su pasado, ser relajado y amante de la diversión si se le da la oportunidad.

                        Ahora, como un adulto maduro y Rey de las Tierras del Reino, con una familia amorosa, incluyendo a una hija, Simba ya no es demasiado aventurero y extrovertido, en lugar de ser humilde y bastante suave de voz, incluso en la cara de sus amigos más cercanos. Como resultado directo de la muerte trágica de Mufasa, Simba también se convirtió en temeroso y sobre protector, específicamente con su hija, Kiara, ya que temía los peligros que acechaban en las Tierras del Reino, ya fueran las hienas o escondidas en las sombras, Tales como la verdadera naturaleza de Scar. También miró hacia atrás en su infancia con cierto sentido de vergüenza, como lo demuestra su conversación con Nala en The Lion King II: Simba's Pride, en la que afirmaba que el espíritu aventurero de Kiara lo hacía temeroso, reflejando su propia actitud aventurera como un cachorro, refiriéndose a los peligros que sufrió durante la infancia.

                        También se demostró que era un gobernante sabio y respetado, como Mufasa antes que él. Él tenía el prejuicio contra los que retenían lealtad a Scar destronado, pero estaba dispuesto a aceptarlos eventualmente, siguiendo la filosofía verbalmente exhibida en "We Are One". Sin embargo, a pesar de ser rey, Simba sabe que él tiene que respetar las tradiciones de otros animales, que era porqué él no interfirió con el torneo de Makuu y de Pua.

                        Simba también le gusta seguir la tradición, por lo que en un primer momento, se sintió decepcionado con su hijo Kion por poner otros animales en la Guardia del León en lugar de otros leones como las Guardias del León anteriores. Sin embargo, después de presenciar la nueva Guardia del León al derrotar a las hienas, Simba acepta la elección de su hijo y se enorgullece de él.`,
           
        }
        request(app)
            .put("/characters/update/14")
            .send(data)
            .set("Accept", "application/json")
            .expect(500,done)
    });
})

//Delete
describe("DELETE /characters/delete", () => {
    it.skip("Responde con 200 si fue eliminado", (done) => {
        const data = {
            id: 14
        }
        request(app)
            .delete("/characters/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(200,done)
    });

    it.skip("Responde con 404 si no existe en la BBDD", (done) => {
        const data = {
            id: 15
        }
        request(app)
            .delete("/characters/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(404,done)
    });

    it("Responde con 500 si hay un error en el procesamiento", (done) => {
        const data = {
           
        }
        request(app)
            .delete("/characters/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(500,done)
    })
})


//Consultas
describe("GET /characters/list", () => {
    it.skip("Devuelve un JSON conteniendo todos los personajes guardados", (done) => {
        request(app)
            .get("/characters/list/")
            .set("Accept", "application/json")
            .expect(200,done)

    });
    it.skip("Si no hay personajes cargados", (done) => {
        request(app)
            .get("/characters/list/")
            .set("Accept", "application/json")
            .expect(204,done)

    });
     it.skip("Error al obtener el listado", (done) => {
        request(app)
            .get("/characters/list")
            .set("Accept", "application/json")
            .expect(404,done)
    })
});


describe("GET /characters/readByName", () => {
    it.skip("Responde con un json con del personaje buscado", (done) => {
        request(app)
            .get("/characters/readByName/")
            .query({name: "Pato Donald"})
            .set("Accept", "application/json")
            .expect(200,done)
    });

    it.skip("Si no encuentra el personaje buscado", (done) => {
        request(app)
            .get("/characters/readByName/")
            .query({name: "Pato D."})
            .set("Accept", "application/json")
            .expect(404, done)
    });

    it.skip("Si hay problemas con la operación", (done) => {
        request(app)
            .get("/characters/readByName")
            .query({nam: "150"})
            .set("Accept", "application/json")
            .expect(500,done)
    })
});

describe("GET /characters/readByAge", () => {
    it.skip("Responde con un JSON conteniendo los personajes que tienen la edad especificada", (done) => {
        request(app)
            .get("/characters/readByAge/")
            .query({age: "91"})
            .set("Accept", "application/json")
            .expect(200, done)
    });

    it.skip("Si no hay coincidencia con la edad", (done) => {
        request(app)
            .get("/characters/readByAge")
            .query({age: "150"})
            .set("Accept", "application/json")
            .expect(404,done)
    });

    it.skip("Si hay problemas con la operación", (done) => {
        request(app)
            .get("/characters/readByAge")
            .query({ag: "150"})
            .set("Accept", "application/json")
            .expect(500,done)
    })
});

describe("GET /characters/readByMovie", () => {
    it.skip("Responde con un JSON conteniendo los personajes de una pelicula especificada", (done) => {
        request(app)
            .get("/characters/readByMovie/")
            .query({id: "10"})
            .set("Accept", "application/json")
            .expect(200, done)
    });

    it.skip("Si no hay coincidencia con la pelicula / serie", (done) => {
        request(app)
            .get("/characters/readByMovie")
            .query({id: "150"})
            .set("Accept", "application/json")
            .expect(404,done)
    });

    it.skip("Si hay problemas con la operación", (done) => {
        request(app)
            .get("/characters/readByMovie")
            .query({i: "10"})
            .set("Accept", "application/json")
            .expect(500,done)
    })
});



