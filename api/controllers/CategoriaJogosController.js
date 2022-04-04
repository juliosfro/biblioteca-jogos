const database = require('../models');

class CategoriaJogosController {

    /* Funcao para ler e trazer todos os registros de categorias que estao na base de dados. */
    static async listarCategorias(request, response) {
        try {
            const categorias = await database.CategoriaJogos.findAll();
            return response.status(200).json(categorias);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    /* Funcao para buscar uma categoria de jogo por id. */
    static async buscarPorId(request, response) {
        const { idCategoriaJogo } = request.params;
        try {
            const categoriaJogo = await database.CategoriaJogos.findOne({
                where: {
                    idCategoriaJogo: Number(idCategoriaJogo)
                }
            })
            return response.status(200).json(categoriaJogo);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    /* Funcao para inserir uma nova categoria do jogo na base de dados. */
    static async cadastrarCategoria(request, response) {
        const novaCategoria = request.body;
        try {

            const novaCategoriaCriada = await database.CategoriaJogos.create(novaCategoria);

            /* Pegando o id da nova categoria cadastrada. */
            const idCategoriaCadastrada = novaCategoriaCriada.null;

            /* Atribuindo o id retornado do banco a nova categoria cadastrada. */
            novaCategoriaCriada.idCategoriaJogo = idCategoriaCadastrada;

            return response.status(200).json(novaCategoriaCriada);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    /* Funcao para atualizar registro de categoria por id. */
    static async editarCategoria(request, response) {
        const { idCategoriaJogo } = request.params;
        const novasInfosCategoria = request.body;

        try {
            /* Para inserir as novas informacoes de registro de categoria. */
            await database.CategoriaJogos.update(novasInfosCategoria, { where: { idCategoriaJogo: Number(idCategoriaJogo) } });

            /* Consultando as novas informacoes atualizadas no banco de dados. */
            const categoriaAtualizada = await database.CategoriaJogos.findOne({ where: { idCategoriaJogo: Number(idCategoriaJogo) } });
            return response.status(200).json(categoriaAtualizada);

        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    /* Funcao para deletar um registro por id. */
    static async apagarCategoria(request, response) {
        const { idCategoriaJogo } = request.params;
        try {
            /* O nome da funcao do sequelize para apagar registros eh destroy. */
            await database.CategoriaJogos.destroy({ where: { idCategoriaJogo: Number(idCategoriaJogo) } });
            return response.status(200).json({ message: `Categoria jogo numero: ${idCategoriaJogo} apagada.` });
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }
}

module.exports = CategoriaJogosController;