'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoriaJogos extends Model {

    static associate(models) {

      /* CategoriaJogos tem relacao de um para muitos (1:n) com Jogos. */
      CategoriaJogos.hasMany(models.Jogos, {
        foreignKey: 'idCategoriaJogo'
      });
    }
  }

  CategoriaJogos.init({
    idCategoriaJogo: { primaryKey: true, type: DataTypes.INTEGER },
    nomeCategoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CategoriaJogos',
  });

  return CategoriaJogos;

};