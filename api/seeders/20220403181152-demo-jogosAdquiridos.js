module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('JogosAdquiridos', [
      {
        idJogo: 1,
        idUsuario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idJogo: 2,
        idUsuario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idJogo: 3,
        idUsuario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idJogo: 4,
        idUsuario: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idJogo: 5,
        idUsuario: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idJogo: 6,
        idUsuario: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idJogo: 1,
        idUsuario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idJogo: 2,
        idUsuario: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idJogo: 2,
        idUsuario: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idJogo: 2,
        idUsuario: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idJogo: 2,
        idUsuario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idJogo: 2,
        idUsuario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('JogosAdquiridos', null, {})
  }
}