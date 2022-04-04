const { Router } = require('express');
const JogosController = require('../controllers/JogosController');

const router = Router();

/* Rota para cadastrar um novo jogo. */
router.post('/jogos', JogosController.cadastrarJogo);

/* Rota para listar todos os jogos cadastrados. */
router.get('/jogos', JogosController.listarJogos);

/* Rota para consultar um jogo por id. */
router.get('/jogos/:idJogo', JogosController.buscarPorId);

/* Rota para editar as informacoes de um jogo. */
router.put('/jogos/:idJogo', JogosController.editarJogo);

/* Rota para deletar um jogo.  */
router.delete('/jogos/:idJogo', JogosController.apagarJogo);

/* Rota para mostrar os 5 jogos mais adquiridos por todos os usuarios. */
router.get('/jogos-mais-adquiridos', JogosController.listarJogosMaisAdquiridos);

module.exports = router;