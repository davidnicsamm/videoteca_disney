'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.PeliculaSerie, {
        through: 'GeneroPeliculaSerie',
        as: 'peliculas',
        foreignKey: 'id_genero'
      }),
      this.hasMany(models.GeneroPeliculaSerie, {
        onDelete: 'cascade',
        hooks: true
      })

    }
  };

  Genero.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

    },
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genero',
  });
  return Genero;
};