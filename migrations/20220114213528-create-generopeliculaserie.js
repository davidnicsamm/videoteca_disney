'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GeneroPeliculaSeries', {
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
        },
        unique: 'campo_unico'
      },
      id_genero: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Generos',
          key: 'id'
        },
        unique: 'campo_unico'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    
    {
      uniqueKeys: {
          campo_unico: {
              fields: ['id_pelicula_serie', 'id_genero']
          }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('GeneroPeliculaSeries');
  }
};