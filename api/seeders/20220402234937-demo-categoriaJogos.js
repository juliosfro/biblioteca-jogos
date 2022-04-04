module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CategoriaJogos', [
      {
        nomeCategoria: 'RPG',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeCategoria: 'Plataforma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeCategoria: 'Corrida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeCategoria: 'Cartas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeCategoria: 'Tiro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeCategoria: 'Quiz',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CategoriaJogos', null, {})
  }
}