/*
Com o MySql instalado, para acessá-lo basta entrar no MySQL Command Line e digitar a senha, ou indo direto pelo cmd:

mysql -h localhost -u root -p
-> 2204

Assim vc acessa o servidor MySQL.

SHOW DATABASES;
    Comando que mostra os bancos de dados presentes no servidor.

    *Use sempre ; no final dos comandos

CREATE DATABASE sistemadecadastro;
    Cria um banco de dados...

USE sistemadecadastro;
    Para usar um db...

SHOW TABLES;
    Mostra todas as tabelas do db.
*/

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

/*  Mostra a estrutura da tabela    */
DESCRIBE usuarios;

/*  Insere dados na tabela  */
INSERT INTO usuarios(nome,email,idade) VALUES (
    "Emisu Jesus",
    "email@teste.com",
    23
);

/*  Exibe todos os dados da tabela  */
SELECT * FROM usuarios;

/*  Exibe uma parte específica da tabela, onde a idade é igual a 9. */
SELECT * FROM usuarios WHERE idade = 9;

/* Deleta uma row da sua tabela */
DELETE FROM usuarios WHERE nome = "Victor Amaral";

UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Lucas Avelâs";