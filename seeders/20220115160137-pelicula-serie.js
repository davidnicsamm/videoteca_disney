'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert('peliculaSeries', [
    {
      titulo: "Fantasía",
      imagen: "https://static.wikia.nocookie.net/disney/images/d/d3/Fantasia.png/revision/latest?cb=20140712091125&path-prefix=es",
      fecha_creacion: '1940-01-01',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      titulo: "Fantasía 2000",
      imagen: "https://static.wikia.nocookie.net/disney/images/4/41/Fantasia_two_thousand_xlg.jpg/revision/latest?cb=20161014225650&path-prefix=es",
      fecha_creacion: '1999-01-01',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      titulo: "El Príncipe y el Mendigo",
      imagen: "https://static.wikia.nocookie.net/disney/images/9/99/Mickey_prince_and_pauper_poster_7808.jpg/revision/latest?cb=20170628151844&path-prefix=es",
      fecha_creacion: '1990-01-01',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      titulo: "El Club de los Villanos con Mickey y sus Amigos",
      imagen: "https://static.wikia.nocookie.net/disney/images/2/2b/HouseOfVillains.png/revision/latest?cb=20140313165934&path-prefix=es",
      fecha_creacion: '2002-01-01',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      titulo: "El show del ratón",
      imagen: "https://static.wikia.nocookie.net/disney/images/b/bb/House_of_Mouse_staff.jpg/revision/latest?cb=20200721165114&path-prefix=es",
      fecha_creacion: '2001-01-01',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      titulo: "La Casa de Mickey Mouse",
      imagen: "https://static.wikia.nocookie.net/disney/images/2/21/Micky_Mouse_Clubhouse_-_Poster.png/revision/latest?cb=20210323123037&path-prefix=es",
      fecha_creacion: '2006-01-01',
      createdAt: new Date(),
      updatedAt: new Date()
    },


    {
      titulo: "Saludos amigos",
      imagen: "https://static.wikia.nocookie.net/disney/images/4/4a/SaludosAmigos.png/revision/latest?cb=20140714064751&path-prefix=es",
      fecha_creacion: '1943-01-01',
      createdAt: new Date(),
      updatedAt: new Date()
    },


    {
      titulo: "Ritmo y melodía",
      imagen: "https://static.wikia.nocookie.net/disney/images/7/79/MelodyTime.png/revision/latest?cb=20111211171909&path-prefix=es",
      fecha_creacion: '1948-01-01',
      createdAt: new Date(),
      updatedAt: new Date()
    },


    {
      titulo: "PatoAventuras",
      imagen: "https://static.wikia.nocookie.net/disney/images/a/aa/Ducktales.jpg/revision/latest?cb=20130108181937&path-prefix=es",
      fecha_creacion: '1987-01-01',
      createdAt: new Date(),
      updatedAt: new Date()
    },


    {
      titulo: "Quack pack",
      imagen: "https://static.wikia.nocookie.net/disney/images/e/ed/Quackpack.jpg/revision/latest?cb=20130108175949&path-prefix=es",
      fecha_creacion: '1996-01-01',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});    
},


  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('peliculaSeries', null,{});
  }
};
