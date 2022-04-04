const database = require('../models');
const { Sequelize } = require('sequelize');

class JogosController {

    /* Funcao para cadastrar um novo jogo. */
    static async cadastrarJogo(request, response) {
        const novoJogo = request.body;
        try {

            const novoJogoCriado = await database.Jogos.create(novoJogo);

            /* Pegando o id do novo jogo cadastrado. */
            const idJogoCadastrado = novoJogoCriado.null;

            /* Atribuindo o id retornado do banco ao novo jogo cadastrado. */
            novoJogoCriado.idJogo = idJogoCadastrado;

            return response.status(200).json(novoJogoCriado);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    /* Funcao para listar todos os jogos cadastrados. */
    static async listarJogos(request, response) {
        try {
            const jogos = await database.Jogos.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            });
            return response.status(200).json(jogos);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    /* Funcao para consultar jogo por id */
    static async buscarPorId(request, response) {
        const { idJogo } = request.params;
        try {
            const jogo = await database.Jogos.findOne({
                where: {
                    idJogo: Number(idJogo)
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return response.status(200).json(jogo);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    /* Funcao para editar jogo cadastrado. */
    static async editarJogo(request, response) {
        const { idJogo } = request.params;
        const novasInfosJogo = request.body;

        try {
            /* Para inserir as novas informacoes de registro de usuario. */
            await database.Jogos.update(novasInfosJogo, { where: { idJogo: Number(idJogo) } });

            /* Consultando as novas informacoes atualizadas no banco de dados. */
            const jogoAtualizado = await database.Jogos.findOne({ where: { idJogo: Number(idJogo) } });
            return response.status(200).json(jogoAtualizado);

        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    /* Funcao para deletar jogo cadastrado. */
    static async apagarJogo(request, response) {
        const { idJogo } = request.params;
        try {
            /* O nome da funcao do sequelize para apagar registros eh destroy. */
            await database.Jogos.destroy({ where: { idJogo: Number(idJogo) } });
            return response.status(200).json({ message: `Jogo id numero: ${idJogo} apagado.` });
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    /* Funcao para retornar os 5 jogos mais adquiridos por todos os usuarios.  */
    static async listarJogosMaisAdquiridos(request, response) {
        try {
            const jogosAdquiridos = await database.JogosAdquiridos.findAll({
                include: [{
                    model: database.Jogos,
                    required: false,
                    attributes: ['nomeJogo', 'idJogo'],
                }],
                attributes: [
                    'JogosAdquiridos.idJogo',
                    [Sequelize.literal('COUNT(JogosAdquiridos.idJogo)'), 'quantidadeJogosAdquiridos']
                ],
                order: [[Sequelize.col('quantidadeJogosAdquiridos'), 'DESC']],
                group: ['JogosAdquiridos.idJogo'],
                limit: 5,
            });
            return response.status(200).json(jogosAdquiridos);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }
}

module.exports = JogosController;