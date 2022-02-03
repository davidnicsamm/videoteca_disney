'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Participas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pelicula_serie: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'PeliculaSeries',
          key: 'id'
        }
        
      },
      id_personaje: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Personajes',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Participas');
  }
};