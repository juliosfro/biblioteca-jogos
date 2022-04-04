const { Router } = require('express');
const CategoriaJogosController = require('../controllers/CategoriaJogosController');

const router = Router();

/* Declaracao de todas as rotas de categoria do jogo. */
router.get('/categoria-jogos', CategoriaJogosController.listarCategorias);
router.get('/categoria-jogos/:idCategoriaJogo', CategoriaJogosController.buscarPorId);
router.post('/categoria-jogos', CategoriaJogosController.cadastrarCategoria);
router.put('/categoria-jogos/:idCategoriaJogo', CategoriaJogosController.editarCategoria);
router.delete('/categoria-jogos/:idCategoriaJogo', CategoriaJogosController.apagarCategoria);

module.exports = router;