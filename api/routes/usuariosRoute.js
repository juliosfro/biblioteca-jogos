const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const router = Router();

/* Declaracao de todas as rotas de usuario. */
router.get('/usuarios', UsuarioController.listarUsuarios);
router.get('/usuarios/:idUsuario', UsuarioController.buscarPorId);
router.post('/usuarios', UsuarioController.cadastrarUsuario);
router.put('/usuarios/:idUsuario', UsuarioController.editarUsuario);
router.delete('/usuarios/:idUsuario', UsuarioController.apagarUsuario);

/* Rota para listar os jogos cadastrados para cada usuario. */
router.get('/jogos-cadastrados', UsuarioController.listarJogosAdquiridos);

module.exports = router;