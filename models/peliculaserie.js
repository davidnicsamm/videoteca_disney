'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PeliculaSerie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Personaje, {
        through: 'Participa',
        as: 'participaciones',
        foreignKey: 'id_pelicula_serie'
      }),

      this.belongsToMany(models.Genero, {
        through: 'GeneroPeliculaSerie',
        as: 'generos',
        foreignKey: 'id_pelicula_serie'
      })

      this.hasMany(models.Participa, {
        onDelete: 'cascade',
        hooks: true,        
      }),
      this.hasMany(models.GeneroPeliculaSerie, {
        onDelete: 'cascade',
        hooks: true
      })
    }
  };
  PeliculaSerie.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

    },
    titulo: DataTypes.STRING,
    imagen: DataTypes.STRING,
    fecha_creacion: DataTypes.DATE,
    calificacion: DataTypes.INTEGER  
  }, {
    sequelize,
    modelName: 'PeliculaSerie',
  });
  return PeliculaSerie;
};