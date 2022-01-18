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

    await queryInterface.bulkInsert('participas', [
      {
        id_personaje: 1,
        id_pelicula_serie: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_personaje: 1,
        id_pelicula_serie: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_personaje: 1,
        id_pelicula_serie: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_personaje: 1,
        id_pelicula_serie: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_personaje: 1,
        id_pelicula_serie: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_personaje: 1,
        id_pelicula_serie: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_personaje: 2,
        id_pelicula_serie: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_personaje: 2,
        id_pelicula_serie: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_personaje: 2,
        id_pelicula_serie: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_personaje: 2,
        id_pelicula_serie: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },

       {
        id_personaje: 2,
        id_pelicula_serie: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_personaje: 2,
        id_pelicula_serie: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_personaje: 2,
        id_pelicula_serie: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_personaje: 2,
        id_pelicula_serie: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_personaje: 2,
        id_pelicula_serie: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

      return queryInterface.bulkDelete('participas', null, {});
  }
};
