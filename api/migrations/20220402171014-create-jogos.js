'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jogos', {
      idJogo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeJogo: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true
      },
      idCategoriaJogo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'CategoriaJogos', key: 'idCategoriaJogo' }
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
    await queryInterface.dropTable('Jogos');
  }
};