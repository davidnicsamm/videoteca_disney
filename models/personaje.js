'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.PeliculaSerie,{
        through: 'Participa',
        as: 'participaciones',
        foreignKey: 'id_personaje'
      }),
      this.hasMany(models.Participa, {
        onDelete: 'cascade',
        hooks: true,
      })
    }
  };
  Personaje.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

    },
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    peso: DataTypes.INTEGER,
    historia: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Personaje',
  });
  return Personaje;
};