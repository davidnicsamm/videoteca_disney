'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('participas', {
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
          model: 'peliculaSeries',
          key: 'id'
        }
        
      },
      id_personaje: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'personajes',
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
    await queryInterface.dropTable('participas');
  }
};