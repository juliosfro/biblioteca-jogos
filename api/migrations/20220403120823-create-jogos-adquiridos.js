'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JogosAdquiridos', {
      idJogo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        constraint: true,
        primaryKey: true,
        references: { model: 'Jogos', key: 'idJogo' }
      },
      idUsuario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        constraint: true,
        primaryKey: true,
        references: { model: 'Usuarios', key: 'idUsuario' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('JogosAdquiridos');
  }
};