'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JogosAdquiridos extends Model {

    static associate(models) {
      /* JogosAdquiridos se relacionam com Usuarios. */
      JogosAdquiridos.belongsTo(models.Usuarios, {
        foreignKey: 'idUsuario',
        constraints: true
      });

      /* JogosAdquiridos se relacionam com Jogos. */
      JogosAdquiridos.belongsTo(models.Jogos, {
        foreignKey: 'idJogo',
        constraints: true
      });
    }
  }

  JogosAdquiridos.init({
    idJogo: { primaryKey: true, type: DataTypes.INTEGER },
    idUsuario: { primaryKey: true, type: DataTypes.INTEGER }
  }, {
    sequelize,
    modelName: 'JogosAdquiridos',
  });
  return JogosAdquiridos;
};