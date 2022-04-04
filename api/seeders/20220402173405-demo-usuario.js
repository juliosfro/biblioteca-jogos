module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [
      {
        nomeUsuario: 'Ana Souza',
        emailUsuario: 'ana@ana.com',
        senhaUsuario: 'fr3r4r43',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeUsuario: 'Marcos Cintra',
        emailUsuario: 'marcos@marcos.com',
        senhaUsuario: '34r34rd',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeUsuario: 'Felipe Cardoso',
        emailUsuario: 'felipe@felipe.com',
        senhaUsuario: 'r43r4r34r',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeUsuario: 'Sandra Gomes',
        emailUsuario: 'sandra@sandra.com',
        senhaUsuario: 'r43r34r43r',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeUsuario: 'Paula Morais',
        emailUsuario: 'paula@paula.com',
        senhaUsuario: 'dewdewdx',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeUsuario: 'Sergio Lopes',
        emailUsuario: 'sergio@sergio.com',
        senhaUsuario: 'g5grfrwqdedrg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {})
  }
}