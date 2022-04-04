'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {

    static associate(models) {
      /* As associacoes entre tabelas sao definidas aqui. 
         Usuarios tem relacao de um para muitos (1:n) com JogosAdquiridos. */
      Usuarios.hasMany(models.JogosAdquiridos, {
        foreignKey: 'idUsuario'
      });
    }
  }

  Usuarios.init({
    /* Indicando o nome da chave primaria, por padrao o Sequelize procura pelo nome id */
    idUsuario: { primaryKey: true, type: DataTypes.INTEGER },
    nomeUsuario: DataTypes.STRING,
    emailUsuario: DataTypes.STRING,
    senhaUsuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
  });

  return Usuarios;

};