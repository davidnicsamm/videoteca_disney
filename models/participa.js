'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Participa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Personaje,{
        foreignKey: 'id_personaje'
      });
      this.belongsTo(models.PeliculaSerie,{
        foreignKey: 'id_pelicula_serie'
      })

    }
  };
  Participa.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

    },
    id_pelicula_serie: DataTypes.INTEGER,
    id_personaje: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Participa',
  });
  return Participa;
};