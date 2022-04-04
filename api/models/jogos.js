'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogos extends Model {

    static associate(models) {

      /* Jogos tem relacao de um para muitos (1:n) com JogosAdquiridos. */
      Jogos.hasMany(models.JogosAdquiridos, {
        foreignKey: 'idJogo'
      });

      /* JogosAdquiridos se relacionam com Jogos. */
      Jogos.belongsTo(models.CategoriaJogos, {
        foreignKey: 'idJogo',
        constraints: true
      });
    }
  }

  Jogos.init({
    idJogo: { primaryKey: true, type: DataTypes.INTEGER },
    nomeJogo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Jogos',
  });

  return Jogos;

};