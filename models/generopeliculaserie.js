'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GeneroPeliculaSerie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.PeliculaSerie, {
        foreignKey: 'id_pelicula_serie'
      }),
       this.belongsTo(models.Genero, {
        foreignKey: 'id_genero'
      })

    }
  };
  GeneroPeliculaSerie.init({
    id: DataTypes.INTEGER,
    id_pelicula_serie: DataTypes.INTEGER,
    id_genero: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GeneroPeliculaSerie',
  });
  return GeneroPeliculaSerie;
};