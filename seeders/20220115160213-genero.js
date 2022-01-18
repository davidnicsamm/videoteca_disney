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
    await queryInterface.bulkInsert('generos', [
      {
        nombre: "Animación",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/8/87/Animated_GIF_from_the_1919_Feline_folies_by_Pat_Sullivan.gif",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nombre: "Cine 3D",
        imagen: "https://commons.wikimedia.org/wiki/File:Experimentando_el_3D_1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nombre: "Acción",
        imagen: "https://commons.wikimedia.org/wiki/File:John_Rambo.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nombre: "Comedia",
        imagen: "https://commons.wikimedia.org/wiki/File:Gentlemen_Prefer_Blondes_Movie_Trailer_Screenshot_(16).jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nombre: "Drama",
        imagen: "https://commons.wikimedia.org/wiki/File:Gone_With_The_Wind_1967_re-release.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nombre: "Fantasía",
        imagen: "http://www.portalarlequin.com.ar/wp-content/uploads/2017/09/foto-cine-fantastico-1.jpg",
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
     return queryInterface.bulkDelete('generos', null, {});
  }
};
