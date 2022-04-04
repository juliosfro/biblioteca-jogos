module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Jogos', [
      {
        nomeJogo: 'Mu Total',
        idCategoriaJogo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeJogo: 'Super Mario',
        idCategoriaJogo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeJogo: 'Sonic',
        idCategoriaJogo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeJogo: 'Temple Run',
        idCategoriaJogo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeJogo: 'Counter Strike 1.6',
        idCategoriaJogo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeJogo: 'Show do Milhao',
        idCategoriaJogo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jogos', null, {})
  }
}