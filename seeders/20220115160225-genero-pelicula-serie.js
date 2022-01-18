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
    
    return queryInterface.bulkInsert('generopeliculaseries', [
      {
        id_pelicula_serie: 1,
        id_genero: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_pelicula_serie: 2,
        id_genero: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_pelicula_serie: 3,
        id_genero: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_pelicula_serie: 4,
        id_genero: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_pelicula_serie: 5,
        id_genero: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_pelicula_serie: 6,
        id_genero: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_pelicula_serie: 7,
        id_genero: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_pelicula_serie: 8,
        id_genero: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_pelicula_serie: 9,
        id_genero: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id_pelicula_serie: 10,
        id_genero: 1,
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
     return queryInterface.bulkDelete('generopeliculaseries', null, {});
  }
};
