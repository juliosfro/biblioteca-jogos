const bodyParser = require('body-parser');
const usuarios = require('./usuariosRoute');
const categoriaJogos = require('./categoriaJogosRoute');
const jogos = require('./jogosRoute');

module.exports = app => {
  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    usuarios,
    categoriaJogos,
    jogos
  )
}
