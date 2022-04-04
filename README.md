- Ferramentas utilizadas:
    - Servidor gerenciador de banco de dados: MySql
    - IDE: Visual Studio Code 
    - Ferramenta para acesso ao banco de dados: MySQL Workbench
    - Ferramenta para modelagem do banco de dados: Toad Data Modeler.
    - Ferramenta utilizada para testar a API: Postman

- Frameworks utilizados:
    - Nodemon para atualizar o servidor conforme alteracao do codigo.
    - Sequelize como framework de ORM para interacao com o banco de dados.
    - Express para gerenciamento de rotas http.

1 - Rodar o comando para criar a base de dados no MySql: 
     - CREATE SCHEMA `biblioteca_brinquedos` DEFAULT CHARACTER SET utf8 ;

2 - No diretorio /biblioteca-jogos executar o comando npm install para baixar todas as dependencias.

3 - No diretorio ./biblioteca-jogos/api/config/config.json colocar o seu usuario e senha do MySql.

4 - Rodar o comando para o Sequelize criar as tabelas no banco de dados:
    - npx sequelize-cli db:migrate  

4 - Rodar o comando para o Sequelize popular com informacoes as tabelas do banco de dados.
    - npx sequelize-cli db:seed:all 

5 - No diretorio /biblioteca-jogos executar o comando npm start para executar a aplicacao.

- End-Points criados:

/* End-points de Usuarios. */

- GET       =>  http://localhost:3000/usuarios                 => Listar todos os usuarios cadastrados.
- POST      =>  http://localhost:3000/usuarios                 => Cadastrar novo usuario.
- GET       =>  http://localhost:3000/usuarios/:idUsuario      => Consultar usuario por id.
- PUT       =>  http://localhost:3000/usuarios/:idUsuario      => Editar usuario por id.
- DELETE    =>  http://localhost:3000/usuarios/:idUsuario      => Deletar usuario por id.

/* Rota para listar os jogos cadastrados para cada usuario. */

- GET       =>  http://localhost:3000/jogos-cadastrados

/* End-points de Categoria de Jogos. */

- GET      =>  http://localhost:3000/categoria-jogos                      => Listar todas as categorias.
- POST     =>  http://localhost:3000/categoria-jogos                      => Cadastrar nova categoria.
- GET      =>  http://localhost:3000/categoria-jogos/:idCategoriaJogo     => Consultar categoria por id.
- PUT      =>  http://localhost:3000/categoria-jogos/:idCategoriaJogo     => Editar categoria por id.
- DELETE   =>  http://localhost:3000/categoria-jogos/:idCategoriaJogo     => Deletar categoria por id.

/* End-points de Jogos. */

- GET      =>  http://localhost:3000/jogos                      => Listar todos os jogos.
- POST     =>  http://localhost:3000/jogos                      => Cadastrar novo jogo.
- GET      =>  http://localhost:3000/jogos/:idJogo              => Consultar jogo por id.
- PUT      =>  http://localhost:3000/jogos/:idJogo              => Editar jogo por id.
- DELETE   =>  http://localhost:3000/jogos/:idJogo              => Deletar jogo por id.

/* Rota para mostrar os 5 jogos mais adquiridos por todos os usuarios. */

GET        =>  http://localhost:3000/jogos-mais-adquiridos



## Contatos

- <p> Desenvolvido por: JULIO DE OLIVEIRA NETO. </p>
- <p> E-mail: juliosfro@gmail.com </p>
- <p> GitHub: https://github.com/juliosfro </p>
- <p> LinkedIn: https://www.linkedin.com/in/juliosfro/ </p>
