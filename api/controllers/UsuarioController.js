const database = require('../models');

class UsuarioController {

    /* Funcao para ler e trazer todos os registros de usuarios que estao na base de dados. */
    static async listarUsuarios(request, response) {
        try {
            const usuarios = await database.Usuarios.findAll();
            return response.status(200).json(usuarios);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    /* Funcao para buscar um registro de usuario por id. */
    static async buscarPorId(request, response) {
        const { idUsuario } = request.params;
        try {
            const pessoa = await database.Usuarios.findOne({
                where: {
                    idUsuario: Number(idUsuario)
                }
            })
            return response.status(200).json(pessoa);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    /* Funcao para inserir um novo registro de usuario na base de dados. */
    static async cadastrarUsuario(request, response) {
        const novoUsuario = request.body;
        try {

            const novoUsuarioCriado = await database.Usuarios.create(novoUsuario);

            /* Pegando o id do novo usuario cadastrado. */
            const idUsuarioCadastrado = novoUsuarioCriado.null;

            /* Atribuindo o id retornado do banco ao novo usuario cadastrado. */
            novoUsuarioCriado.idUsuario = idUsuarioCadastrado;

            return response.status(200).json(novoUsuarioCriado);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    /* Funcao para atualizar um registro de usuario por id. */
    static async editarUsuario(request, response) {
        const { idUsuario } = request.params;
        const novasInfosUsuario = request.body;

        try {
            /* Para inserir as novas informacoes de registro de usuario. */
            await database.Usuarios.update(novasInfosUsuario, { where: { idUsuario: Number(idUsuario) } });

            /* Consultando as novas informacoes atualizadas no banco de dados. */
            const usuarioAtualizado = await database.Usuarios.findOne({ where: { idUsuario: Number(idUsuario) } });
            return response.status(200).json(usuarioAtualizado);

        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    /* Funcao para deletar um registro por id. */
    static async apagarUsuario(request, response) {
        const { idUsuario } = request.params;
        try {
            /* O nome da funcao do sequelize para apagar registros eh destroy. */
            await database.Usuarios.destroy({ where: { idUsuario: Number(idUsuario) } });
            return response.status(200).json({ message: `Usuario id numero: ${idUsuario} apagado.` });
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    /* Funcao para consultar os jogos cadastrados (adquiridos) pelo usuario. */
    static async listarJogosAdquiridos(request, response) {
        try {
            const usuarios = await database.Usuarios.findAll({
                include: [{
                    model: database.JogosAdquiridos,
                    required: true,
                    attributes: ['idJogo'],

                    include: [{
                        model: database.Jogos,
                        required: false,
                        attributes: ['nomeJogo'],

                        include: [{
                            model: database.CategoriaJogos,
                            required: false,
                            attributes: ['nomeCategoria']
                        }]
                    }]
                }],
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            });
            return response.status(200).json(usuarios);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }
}

module.exports = UsuarioController;